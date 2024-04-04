import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/Todolist";

function App() {
  const [listTodo, setListTodo] = useState([]);
  // Insert Items into the List
  let addList = (inputText) => {
    // make sure inputText is not empty
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  // Remove Item from the List
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">Simple React To-Do Application</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
