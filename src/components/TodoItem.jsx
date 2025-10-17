import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const handleSave = () => {
    if (!editValue.trim()) return;
    updateTodo(todo.id, { ...todo, todo: editValue });
    setIsEditing(false);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      {/* Toggle Complete */}
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      {/* Todo Text */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditing ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through text-gray-700" : ""}`}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        readOnly={!isEditing}
      />

      {/* Edit / Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isEditing) handleSave();
          else setIsEditing(true);
        }}
        disabled={todo.completed}
      >
        {isEditing ? "💾" : "✏️"}
      </button>

      {/* Delete Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
