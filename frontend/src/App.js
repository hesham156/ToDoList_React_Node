import "./App.css";

import { Route, Routers, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Reg from "./pages/singup/Reg";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Reg />} />
      </Routes>
    </div>
  );
}

export default App;
