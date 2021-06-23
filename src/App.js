import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Master ReactJS" />
      <Todo text="Master NextJS" />
    </div>
  );
}

export default App;
