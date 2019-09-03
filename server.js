const express = require("express");
const app = express();
const port = 5000;
const questions = require("./question.api");
const scores = require("./scores.api");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", questions);
app.use("/", scores);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
