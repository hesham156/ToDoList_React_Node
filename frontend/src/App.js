import "./App.css";
import AddTask from "./component/addTask/AddTask";
import NaveBar from "./component/naveBar/NaveBar";
import Taskes from "./component/taskes/Taskes";

function App() {
  return (
    <div className="App">
      <NaveBar />
      <Taskes />
      <AddTask />
    </div>
  );
}

export default App;
