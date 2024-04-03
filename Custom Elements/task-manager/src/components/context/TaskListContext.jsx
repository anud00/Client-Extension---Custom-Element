import { createContext, useState, useEffect } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState(null);

  const generateId = () => {
    return Math.random().toString(36).substring(2, 11);
  };

  const addTask = (title) => {
    setTasks([...tasks, { title, id: generateId() }]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const clearTask = () => {
    setTasks([]);
  };
  const findItem = (id) => {
    const Item = tasks.find((task) => task.id === id);
    setEditItem(Item);
  };
  const editTask = (title, id) => {
    const newTask = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTask);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        editItem,
        addTask,
        removeTask,
        clearTask,
        findItem,
        editTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
