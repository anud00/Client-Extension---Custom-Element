import { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

function Task({ task }) {
  const { removeTask, findItem } = useContext(TaskListContext);

  return (
    <li className="task">
      <span>{task.title}</span>
      <div>
        <button
          className="edit-btn"
          onClick={() => {
            findItem(task.id);
          }}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => {
            removeTask(task.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;
