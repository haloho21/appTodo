/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";

import DoneList from "./DoneList";
import ListTodo from "./ListTodo";

const FormTodo = ({ onAddItem }) => {
  const inputRef = useRef();
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
      priority: priority,
    };

    onAddItem(newTodo);

    console.log(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ===Input=== */}
      <div className="flex items-center my-5 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-none outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your Task"
        />
      </div>
      <div className="flex justify-between">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="bg-gray-200 rounded-full outline-none w-[45%] pl-6 h-12 cursor-pointer"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          className="border-none rounded-full bg-green-500 w-[50%] h-12 text-white text-lg font-medium cursor-pointer"
          type="submit"
        >
          ADD+
        </button>
      </div>
    </form>
  );
};

export default FormTodo;
