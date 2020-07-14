const express = require("express")
const router = express.Router()
const db = require("../db/index");
const authorize = require("../middleware/authorize");

router.get("/profile", authorize, async (req, res) => {
    try {
      const user = await db.query(
        "SELECT first_name FROM users WHERE user_id = $1",
        [req.user.id] 
      ); 
      
      res.json(user.rows[0]);
      console.log(user.rows[0])
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });



router.get("/home", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM thereports");
        res.json(result.rows)
        console.log(result.rows)
    } catch (error) {
        next(error)
    }
})

router.get("/home/getid/:id", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM users WHERE user_id = $1", [req.params.id])
        res.json(result.rows)
        console.log(result.rows)
    } catch (error) {
        next(error)
    }
})


router.get("/home/:id", async (req, res, next) => {
    try {
        // const { id } = req.params
        const personalReport = await db.query("SELECT * FROM thereports WHERE user_id = $1", [req.params.id])
        res.json(personalReport.rows)
        console.log(personalReport.rows)
    } catch (error) {
        next(error)
    }

})

router.post("/home", async (req, res, next) => {
    try {
        const postReq = await db.query("INSERT INTO thereports (category, address, details, imageurl, user_id) VALUES ($1, $2, $3, $4, $5)", [req.body.category, req.body.address, req.body.details, req.body.imageUrl, req.body.user_id])
        res.send("Successfully Posted")
    } catch (error) {
        next(error)
    }
})


router.delete("/home/:id", async(req, res, next) => {
    try {
        const { id } = req.params
        const deleteReport = await db.query("DELETE FROM thereports WHERE id = $1", [id])
        res.send("SuccessFully Deleted")
    } catch (error) {
        next(error)
    }
})








module.exports = router;
