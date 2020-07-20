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
        const result = await db.query("SELECT * FROM thereports ORDER BY id DESC");
        res.json(result.rows)
        console.log(result.rows)
    } catch (error) {
        next(error)
    }
})


router.get("/home/public/:id", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM thereports WHERE privatereport = false AND user_id = $1" , [req.params.id]);
        res.json(result.rows)
        console.log(result.rows)
    } catch (error) {
        next(error)
    }
})


router.get("/home/latest/:id", async (req, res, next) => {
  try {
      const result = await db.query("SELECT * FROM thereports WHERE privatereport = false AND status = 'forwarded' AND localgovernment = $1 ORDER BY id DESC LIMIT 10",[req.params.id]);
      res.json(result.rows)
      console.log(result.rows)
  } catch (error) {
      next(error)
  }
})

// router.get("/home/getid/:id", async (req, res, next) => {
//     try {
//         const result = await db.query("SELECT * FROM users WHERE user_id = $1 ", [req.params.id])
//         res.json(result.rows)
//         console.log(result.rows)
//     } catch (error) {
//         next(error)
//     }
// })


router.get("/home/:id", async (req, res, next) => {
    try {
        // const { id } = req.params
        const personalReport = await db.query("SELECT * FROM thereports WHERE user_id = $1 ORDER BY id DESC", [req.params.id])
        res.json(personalReport.rows)
        console.log(personalReport.rows)
    } catch (error) {
        next(error)
    }

})

router.post("/home", async (req, res, next) => {
    try {
        const postReq = await db.query("INSERT INTO thereports (category, address, details, imageurl, user_id, localgovernment,privatereport) VALUES ($1, $2, $3, $4, $5, $6, $7)", [req.body.category, req.body.address, req.body.details, req.body.imageUrl, req.body.user_id, req.body.localgovernment, req.body.privatereport])
        res.send("Successfully Posted")
    } catch (error) {
        next(error)
    }
})






// router.patch("/:id", async function(req, res, next) {
//     try {
//       const result = await db.query(
//         "UPDATE fishes SET name=$1, type=$2 WHERE id=$3 RETURNING *",
//         [req.body.name, req.body.type, req.params.id]
//       );
//       return res.json(result.rows[0]);
//     } catch (err) {
//       return next(err);
//     }
//   });



router.patch("/forwarded/:id", async(req, res, next) => {
    try {
      const result = await db.query(
        "UPDATE thereports SET status ='forwarded' WHERE id=$1 RETURNING * ORDER BY id ASC",
        [req.params.id]
      );
      return res.json(result.rows[0]);
    } catch (err) {
      return next(err);
    }
  });



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
