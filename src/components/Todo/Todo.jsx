/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../../assets/todo_icon.png";
import TodoItems from "../todoItems/TodoItem";
import DoneList from "../doneTodo/DoneTodo";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
  );

  const inputRef = useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";

    console.log(inputText);
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((items) => items.id !== id));
    console.log(id);
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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      add();
    }
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    console.log(todoList);
  }, [todoList]);

  const incompleteTasks = todoList.filter((item) => !item.isCompleted);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* ===Title=== */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">Todo List</h1>
      </div>

      {/* ===Input=== */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          onKeyPress={handleKeyPress}
          className="bg-transparent border-none outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your Task"
        />

        <button
          onClick={add}
          className="border-none rounded-full bg-green-500 w-32 h-14 text-white text-lg font-medium cursor-pointer"
          type="submit"
        >
          ADD+
        </button>
      </div>

      {/* ===List=== */}
      <div>
        {incompleteTasks.map((items, index) => {
          return (
            <TodoItems
              key={index}
              text={items.text}
              deleteTodo={deleteTodo}
              id={items.id}
              toggleTodo={toggleTodo}
              isCompleted={items.isCompleted}
            />
          );
        })}
      </div>

      {/* ===DoneList=== */}
      <DoneList
        todoList={todoList}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
};

export default Todo;
