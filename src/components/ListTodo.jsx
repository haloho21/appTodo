/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import TodoItems from "./TodoItem";

export default function ListTodo({
  onClearAll,
  todoList,
  deleteTodo,
  toggleTodo,
}) {
  const incompleteTasks = (todoList || []).filter((item) => !item.isCompleted);

  const [sortBy, setSortBy] = useState("all");

  const priorityMapping = {
    low: 1,
    medium: 2,
    high: 3,
  };

  let sortedTasks = incompleteTasks;

  if (sortBy !== "all") {
    sortedTasks = incompleteTasks.sort((a, b) => {
      return priorityMapping[a.priority] - priorityMapping[b.priority];
    });
  }

  return (
    <div className="rounded-lg mt-4">
      <div className="flex h-10 justify-between rounded-t-lg">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="h-8 w-14 bg-orange-400 rounded-lg"
        >
          <option value="all">All</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
        <button
          onClick={onClearAll}
          className="text-white bg-red-500 w-14 h-8 rounded-lg text-medium"
        >
          Clear
        </button>
      </div>
      {sortedTasks.map((items, index) => {
        return (
          <TodoItems
            key={index}
            text={items.text}
            priority={items.priority}
            deleteTodo={deleteTodo}
            id={items.id}
            toggleTodo={toggleTodo}
            isCompleted={items.isCompleted}
          />
        );
      })}
    </div>
  );
}
