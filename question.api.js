const express = require("express");
const router = express.Router();
const pool = require("./connection");

function selectQuestions(req, res) {
  pool
    .query("select * from questions order by random() limit 10")
    .then(result => {
      res.send(result.rows);
    });
}

router.get("/questions", selectQuestions);

module.exports = router;
