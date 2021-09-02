import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Input.css";
import { saveTodos } from "../features/todoSlice";

export const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    console.log("adding ${input}");
    dispatch(
      saveTodos({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("")
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
