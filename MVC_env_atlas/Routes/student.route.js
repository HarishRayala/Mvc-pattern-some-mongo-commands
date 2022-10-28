const express = require("express");
const { StudentController } = require("../controllers/student.controller");


const studentRouter = express.Router();
studentRouter.use(express.json());

studentRouter.get("/", StudentController.getStudent);

studentRouter.get("/:studentName", StudentController.getStudentByName);

studentRouter.post("/addStudent", StudentController.postStudent);

module.exports = { studentRouter };
