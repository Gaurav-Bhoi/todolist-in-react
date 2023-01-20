const express = require("express");
const cors = require("cors");
const todoTask = require("./DATABASE/todoData");
require("./DATABASE/config");

const app = express();

app.use(cors());
app.use(express.json());

const getData = async () => {
  const data = await todoTask.find();
  return data;
};

const postData = async (data) => {
  let body = new todoTask(data);
  let result = await body.save();
  return result;
};

app.get("/todos", async (request, response) => {
  const todos = await getData();
  response.send(todos);
});

app.post("/todos", async (request, response) => {
  let result = await postData(request.body);
  console.warn(result);
  response.send(result);
});

app.listen(5000);
