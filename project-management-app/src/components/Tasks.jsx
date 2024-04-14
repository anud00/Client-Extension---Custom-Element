import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="">This project does not have any tasks yet.</p>
      )}
      {tasks.length > 0 && (
        <ul className="">
          {tasks.map((task) => (
            <li key={task.id} className="">
              <span>{task.text}</span>
              <button className="" onClick={() => onDelete(task.id)}>
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
