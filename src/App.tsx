import "./App.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";

function App() {
  return (
    <>
      <Header />
      <Todos />
      <Button />
    </>
  );
}

export default App;
