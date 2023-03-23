import { Task } from "./Task";

type props = {};

const todos = ["React", "Vite", "TypeScripts"];

export const Todos = (props: props) => {
  return (
    <div className="todos">
      {todos.map((task) => (
        <Task name={task} />
      ))}
    </div>
  );
};
