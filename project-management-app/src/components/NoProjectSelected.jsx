import Button from "./Button.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="">
      <img src="" alt="An empty task list" className="" />
      <h2 className="">No Project Selected</h2>
      <p className="">Select a project or get started with a new one</p>
      <p className="">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
