import { Sidebar } from "./component/sidebar/Sidebar";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Exercise } from "./pages/exercise/Exercise";
import { Food } from "./pages/food/Food";
import { Goal } from "./pages/goal/Goal";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/food" element={<Food />} />
          <Route path="/goals" element={<Goal />} />
        </Routes>
      </div>
    </div>
  );
}
