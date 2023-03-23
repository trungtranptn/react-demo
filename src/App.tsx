import "./App.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { useState } from "react";
import { TaskType } from "./types/TaskType";

function App() {
  const [data, setData] = useState<Array<TaskType>>([
    {
      id: "1",
      name: "React",
    },
    {
      id: "2",
      name: "Vite",
    },
    {
      id: "3",
      name: "TypeScripts",
    },
  ]);

  const handleDeleteTask = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <>
      <Header />
      <Todos data={data} actionDelete={handleDeleteTask} />
      <Button />
    </>
  );
}

export default App;
