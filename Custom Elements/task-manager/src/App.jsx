import Header from "./components/App/Header";
import TaskList from "./components/App/TaskList";
import TaskListContextProvider from "./components/context/TaskListContext";
import TaskForm from "./components/App/TaskForm";
import "./App.css";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="task-manager">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
