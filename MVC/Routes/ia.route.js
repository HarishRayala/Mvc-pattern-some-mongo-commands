const express = require("express");
const { IA } = require("../Models/IA.model");

const IaRouter = express.Router();

IaRouter.get("/", async (req, res) => {
  const IaData = await IA.find();
  res.send(IaData);
});

module.exports = { IaRouter };
