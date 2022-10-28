const { Todo } = require("../Models/Todo.model")

const getTodo=async(req,res)=>{
    const todoData=await Todo.find();
    res.send(todoData)
}

const getTodoById=async(req,res)=>{
    console.log(req.params.id);
    const todoData=await Todo.find({id:req.params.id});
    res.send(todoData)
}

const postTodo=async(req,res)=>{
    const payload=req.body
    if(!payload.id || !payload.title || !payload.status){
        res.send("Please send all required Fields");
    }
    else{
        await Todo.insertMany([payload])
        res.send("Todo data posted successfully")
    }
}

const putTodo=async(req,res)=>{
    const {id}=req.params
    const data=await Todo.updateOne({id:id},req.body);
    res.send(data)
}

const deleteTodo=async(req,res)=>{
    const {id}=req.params
    await Todo.deleteOne({id:id},req.body);
    res.send("Deleted Successfully")
}

const TodoController={
    getTodo,
    getTodoById,
    postTodo,
    putTodo,
    deleteTodo
}

module.exports={TodoController}