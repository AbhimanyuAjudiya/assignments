const express = require('express');
const app = express();
const { createTodo, updateTodo } = require('./type');
const { todo } = require('./db');
const cors = require("cors");

app.use(express.json());
app.use(cors({}))

app.post('/todos', async (req, res) => {
  const createPayload = req.body;
  const parsesedPayload = createTodo.safeParse(createPayload);
  if(!parsesedPayload.success){
    res.status(400).json({
      msg: "Invalid inputs"
    });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })

  res.json({
    msg: "todo created"
  })

});
 
app.get("/todos", async (req, res) => {

  const todos = await todo.find({});

  res.json({
    todos
  })

});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsesedPayload = updateTodo.safeParse(updatePayload);
  if(!parsesedPayload.success){
    res.status(400).json({
      msg: "Invalid inputs"
    });
    return;
  }

  await todo.updateOne({
    _id: updatePayload._id
  }, { "$set" : {
      completed : true
    }
  }).catch(()=>[
    res.send(400).send("unable to complete")
  ])
  res.json({
    msg:"Todo marked as completed"
  })

});

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});