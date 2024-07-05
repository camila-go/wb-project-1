const express = require("express");
const { createQuestion, getQuestions, deleteQuestion } = require("./controller/controller.cjs");
const cors = require('cors');

const app = express();

const port = 4500;

app.use(express.json());
app.use(cors())
app.get('/api/question', getQuestions)
app.post("/api/question", createQuestion);
app.delete("/api/question", deleteQuestion)

app.listen(port, () => console.log(`Server running on port: ${port}`));
