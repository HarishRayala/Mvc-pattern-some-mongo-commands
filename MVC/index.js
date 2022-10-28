const express = require("express");
const { connection } = require("./config/db");
const { IaRouter } = require("./Routes/ia.route");
const { studentRouter } = require("./Routes/student.route");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to homepage</h1>");
});

app.use("/students", studentRouter);

app.use("/ias", IaRouter);

app.listen(8000, async () => {
  try {
    await connection;
    console.log("connection to mongodb successfully");
  } catch (err) {
    console.log("Error connecting to db", err);
  }
  console.log("Listening to server 8000");
});
