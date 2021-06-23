import "./App.css";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Master ReactJS" />
      <Todo text="Master NextJS" />
      <Modal></Modal>
      <Backdrop></Backdrop>
    </div>
  );
}

export default App;
