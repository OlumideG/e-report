const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../db");
const validInfo = require("../middleware/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require("../middleware/authorize");

//authorizeentication


router.post("/", authorize, async (req, res) => {
  try {
    const user = await db.query(
      "SELECT first_name FROM users WHERE user_id = $1",
      [req.user.id] 
    ); 
    
  //if would be req.user if you change your payload to this:
    
  //   function jwtGenerator(user_id) {
  //   const payload = {
  //     user: user_id
  //   };
    
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});






router.get("/", authorize, async (req, res) => {
  try {
    const user = await db.query(
      "SELECT first_name FROM users WHERE user_id = $1",
      [req.user.id] 
    ); 
    
  //if would be req.user if you change your payload to this:
    
  //   function jwtGenerator(user_id) {
  //   const payload = {
  //     user: user_id
  //   };
    
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});




router.post("/usersignup", validInfo, async (req, res) => {
  const { email, firstname, lastname, password } = req.body;

  try {
    const user = await db.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if (user.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = await db.query(
      "INSERT INTO users (first_name, last_name, user_email, user_password) VALUES ($1, $2, $3, $4) RETURNING first_name, last_name, user_email",
      // "INSERT INTO users (first_name, last_name, user_email, user_password) VALUES ($1, $2, $3, $4) RETURNING *",
      [firstname, lastname, email, bcryptPassword]
    );

    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/userlogin", validInfo, async (req, res) => {
  const { email, password, user_id  } = req.body;

  try {
    const user = await db.query("SELECT * FROM users WHERE user_email = $1", [
      email

    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");

    }
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json({ jwtToken });
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});




router.post("/adminsignup", validInfo, async (req, res) => {
    const { email, firstname, lastname, password } = req.body;
  
    try {
      const user = await db.query("SELECT * FROM adminusers WHERE user_email = $1", [
        email
      ]);
  
      if (user.rows.length > 0) {
        return res.status(401).json("User already exist!");
      }
  
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);
  
      let newUser = await db.query(
        "INSERT INTO adminusers (first_name, last_name, user_email, user_password) VALUES ($1, $2, $3, $4) RETURNING *",
        [firstname, lastname, email, bcryptPassword]
      );
  
      const jwtToken = jwtGenerator(newUser.rows[0].user_id);
  
      return res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });




router.post("/adminlogin", validInfo, async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await db.query("SELECT * FROM adminusers WHERE user_email = $1", [
        email
      ]);
  
      if (user.rows.length === 0) {
        return res.status(401).json("Invalid Credential");
      }
  
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].user_password
      );
  
      if (!validPassword) {
        return res.status(401).json("Invalid Credential");
      }
      const jwtToken = jwtGenerator(user.rows[0].user_id);
      return res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });



router.post("/verify", authorize, (req, res) => {
  try {
    res.json(true);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
