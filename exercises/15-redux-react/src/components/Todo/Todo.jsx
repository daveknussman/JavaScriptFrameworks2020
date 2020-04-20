/**
 * Refactor this presentation components so that is using the props that is is getting
 * from its container. The container has already been completed for you.
 * @see src/components/Todo/TodoContainer.js
 *
 * As a bonus, see if you can get and set user input from the store as well
 */

// import React, { Component, useState } from "react";
// import React from "react";
import React, { useState } from "react";
import ListItem from "./ListItem/ListItem";


function Todo(props) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(userInput);
    setUserInput("");
  };

  return (
    <div className="mt-4">
      <h1 className="h3">Todo List</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter text"
            aria-label="Enter text"
            aria-describedby="button-add"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit" id="button-add">
              Add
            </button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {/* The todos will be passed down as props */}
        {props.todos.map((text, index) => {
          const key = `todo-item-${index}`;
          return (
            <ListItem deleteTodo={props.deleteTodo} todoIndex={index} key={key}>
              {text}
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
