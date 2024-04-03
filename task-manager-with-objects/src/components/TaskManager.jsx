import React, { useState, useEffect } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const userId = Liferay.ThemeDisplay.getUserId();
      const authToken = Liferay.authToken;
      const response = await fetch(
        `/o/c/taskmanagers?userId=${userId}&p_auth=${authToken}`
      );
      const tasksData = await response.json();
      setTasks(tasksData.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = async () => {
    if (!taskInput.trim()) return;
    try {
      const authToken = Liferay.authToken;
      const response = await fetch(`/o/c/taskmanagers/?p_auth=${authToken}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ task: taskInput.trim() }),
      });
      if (response.ok) {
        fetchTasks();
        setTaskInput("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditTask = async (taskId, newTaskName) => {
    if (!newTaskName.trim()) return;
    try {
      const authToken = Liferay.authToken;
      const response = await fetch(
        `/o/c/taskmanagers/${taskId}/?p_auth=${authToken}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: newTaskName.trim() }),
        }
      );
      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      const authToken = Liferay.authToken;
      const response = await fetch(
        `/o/c/taskmanagers/${taskId}/?p_auth=${authToken}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        fetchTasks();
      } else {
        console.error("Failed to delete task:", response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task}
            <button
              onClick={() =>
                handleEditTask(task.id, prompt("Enter new task name:"))
              }
            >
              Edit
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
