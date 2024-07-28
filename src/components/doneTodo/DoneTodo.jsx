/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import TodoItems from "../todoItems/TodoItem";

const DoneList = ({ todoList, deleteTodo, toggleTodo }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Pastikan todoList selalu diinisialisasi sebagai array
  const completedTasks = (todoList || []).filter(
    (item) =>
      item.isCompleted &&
      item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-semibold mb-3">Done List</h2>
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          type="text"
          placeholder="Search completed tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent border-none outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        />
      </div>
      <div>
        {completedTasks.map((items, index) => (
          <TodoItems
            key={index}
            text={items.text}
            deleteTodo={deleteTodo}
            id={items.id}
            toggleTodo={toggleTodo}
            isCompleted={items.isCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default DoneList;
