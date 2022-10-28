const express = require("express");
const { TodoController } = require("../controller/todo.controller");
const todoRouter = express.Router();
todoRouter.use(express.json());

todoRouter.get("/todos",TodoController.getTodo );


todoRouter.get("/:id",TodoController.getTodoById );

todoRouter.post("/create",TodoController.postTodo );

todoRouter.put("/:id",TodoController.putTodo);

todoRouter.delete("/:id",TodoController.deleteTodo);

module.exports = { todoRouter };