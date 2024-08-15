/* eslint-disable no-unused-vars */
import React from "react";
import todo_icon from "../assets/todo_icon.png";

export default function Header() {
  return (
    <div className="flex items-center mt-7 gap-2">
      <img className="w-8" src={todo_icon} alt="" />
      <h1 className="text-3xl font-semibold">Todo List</h1>
    </div>
  );
}
