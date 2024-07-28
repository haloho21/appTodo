/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import tick from "../../assets/tick.png";
import not_tick from "../../assets/not_tick.png";
import deleteIcon from "../../assets/delete.png";

const TodoItems = ({ text, id, isCompleted, deleteTodo, toggleTodo }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggleTodo(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img className="w-7" src={isCompleted ? tick : not_tick} alt="" />
        <p
          className={`text-slate-700 ml-4 text-[16px] decoration-slate-600 ${
            isCompleted ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={deleteIcon}
        alt=""
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
