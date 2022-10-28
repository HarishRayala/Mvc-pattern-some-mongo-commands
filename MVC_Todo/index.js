const express = require("express");
const { connection } = require("./config/db");
const { todoRouter } = require("./Routes/todo.route");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to homepage</h1>");
});

app.use("/todos",todoRouter);

app.listen(5000, async () => {
  try {
    await connection;
    console.log("connection to mongodb successfully");
  } catch (err) {
    console.log("Error connecting to db", err);
  }
  console.log("Listening to server 5000");
});
