/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import FormTodo from "./components/FormTodo";
import Header from "./components/Header";
import ListTodo from "./components/ListTodo";
import DoneList from "./components/DoneList";

const App = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
  );

  const handleAddItem = (newItem) => {
    setTodoList([...todoList, newItem]);
  };

  const handleClearIncomplete = () => {
    setTodoList((prev) => prev.filter((item) => item.isCompleted));
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((items) => items.id !== id));
    console.log(id);
  };

  const handleEditTodo = (id, newText) => {
    setTodoList((prev) => {
      return prev.map((items) => {
        if (items.id === id) {
          return { ...items, text: newText };
        }
        return items;
      });
    });
  };

  const toggleTodo = (id) => {
    setTodoList((prev) => {
      return prev.map((items) => {
        if (items.id === id) {
          return { ...items, isCompleted: !items.isCompleted };
        }
        return items;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="bg-stone-900 flex py-4 min-h-screen justify-center gap-4">
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        <Header />
        <FormTodo onAddItem={handleAddItem} todoList={todoList} />
        <ListTodo
          onClearAll={handleClearIncomplete}
          todoList={todoList}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
        <DoneList
          todoList={todoList}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
};

export default App;
