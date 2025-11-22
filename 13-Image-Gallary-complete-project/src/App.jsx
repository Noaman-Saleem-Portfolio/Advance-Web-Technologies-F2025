import "./App.css";
import ExamRoom from "./components/ExamRoom";
import { Link, Route, Routes } from "react-router";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <nav className="h-14 bg-blue-800 text-white flex justify-center gap-4 items-center">
        <Link to={"/"}>Home</Link>
        <Link to={"/exam-room"}>ExamRoom</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exam-room" element={<ExamRoom />} />
      </Routes>
    </div>
  );
}

export default App;
