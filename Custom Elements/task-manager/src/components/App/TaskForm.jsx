import { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

function TaskForm() {
  const { addTask, clearTask, editItem, editTask } =
    useContext(TaskListContext);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
    } else {
      editTask(title, editItem.id);
    }
    setTitle("");
  };

  const handleClearTask = () => {
    clearTask();
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Add Task...."
        className="task-input"
        onChange={handleChange}
        required
      />
      <div className="buttons">
        <button className="add-task-btn">
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button onClick={handleClearTask} className="clear-btn">
          Clear All Tasks
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
