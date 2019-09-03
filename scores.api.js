const express = require("express");
const router = express.Router();
const pool = require("./connection");

function selectQuestions(req, res) {
  pool.query("select * from scores order by score limit 10").then(result => {
    res.send(result.rows);
  });
}

router.get("/scores", selectQuestions);

router.post("/scores", (req, res) => {
  pool
    .query("insert into scores (username, score) values ($1::text, $2::int)", [
      req.body.username,
      req.body.score
    ])
    .then(() => {
      selectQuestions(req, res);
    });
});

module.exports = router;
