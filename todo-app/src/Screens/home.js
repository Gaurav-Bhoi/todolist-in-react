import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoList, newTodo } from "../Redux/Reducers/homeReducers";

import "./home.css";

export default function Home() {
  const { todos } = useSelector((state) => state.homeReducers);
  const { newTodoData } = useSelector((state) => state.homeReducers);
  const setTodos = useDispatch();

  useEffect(() => {
    setTodos(newTodo(""));
    getData();
  }, []);

  const getData = async () => {
    await fetch("http://127.0.0.1:5000/todos")
      .then((res) => res.json())
      .then((res) => {
        setTodos(todoList(res));
      });
  };

  const renderList = () => {
    return todos.map((ele, index) => {
      return (
        <div className="card cardBody" key={index}>
          <div className="cardData">{ele.todoTask}</div>
        </div>
      );
    });
  };

  const onPressAdd = async () => {
    if (newTodoData == "") {
      alert("please enter your task before adding");
    } else {
      let todo = { todoTask: newTodoData };

      await fetch("http://127.0.0.1:5000/todos", {
        method: "post",
        body: JSON.stringify(todo),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((res) => {
          setTodos(newTodo(""));
          getData();
        });
    }
  };

  const addData = () => {
    return (
      <div className="addDataStyle">
        <input
          type="text"
          className="form-control"
          value={newTodoData}
          placeholder="What to do now !"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setTodos(newTodo(e.target.value))}
        ></input>

        <button
          type="button"
          className="btn btn-primary addButton"
          onClick={onPressAdd}
        >
          Add
        </button>
      </div>
    );
  };

  return (
    <div className="mainWindow">
      <h1 className="headerStyle">TODO LIST</h1>
      {renderList()}
      {addData()}
    </div>
  );
}
