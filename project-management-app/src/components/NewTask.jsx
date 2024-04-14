import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="">
      <input
        type="text"
        className=""
        onChange={handleChange}
        value={enteredTask}
      />
      <button className="" onClick={handleClick}>
        Add Task
      </button>
    </div>
  );
}
