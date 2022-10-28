const { Student } = require("../Models/Student.model");

const getStudent = async (req, res) => {
  const studentsData = await Student.find();
  res.send(studentsData);
};

const getStudentByName = async (req, res) => {
  console.log(req.params.studentName);
  const studentsData = await Student.find({ name: req.params.studentName });
  res.send(studentsData);
};

const postStudent = async (req, res) => {
  const payload = req.body;
  if (!payload.age || !payload.name || !payload.course) {
    res.send("Please send all required Fields");
  }
  if (payload.course === "MERN") {
    await Student.insertMany([payload]);
    res.send("Student data created Successfully");
  } else {
    res.send("Please enter a valid course");
  }
};

const StudentController = {
  getStudent,
  getStudentByName,
  postStudent,
};

module.exports = { StudentController };
