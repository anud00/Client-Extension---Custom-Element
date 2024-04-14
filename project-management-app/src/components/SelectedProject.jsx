import Tasks from "./Tasks.jsx";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="">
      <header className="">
        <div className="">
          <h1 className="">{project.title}</h1>
          <button className="" onClick={onDelete}>
            Delete
          </button>
        </div>
        <p className="">{formattedDate}</p>
        <p className="">{project.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
