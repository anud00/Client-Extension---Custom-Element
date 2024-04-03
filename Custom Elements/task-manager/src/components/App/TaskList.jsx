import { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

function TaskList() {
  const { tasks } = useContext(TaskListContext);
  return (
    <div className="task-list">
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">All tasks done</div>
      )}
    </div>
  );
}

export default TaskList;
