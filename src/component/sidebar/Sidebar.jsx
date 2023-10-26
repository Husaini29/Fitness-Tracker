import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { TbYoga } from "react-icons/tb";
import { MdFoodBank } from "react-icons/md";
import { FiTarget } from "react-icons/fi";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <h2>Fitness Tracker</h2>
        <ul>
          <li>
            <MdDashboard />
            <NavLink to="/" className="navlinks">
              Dashboard
            </NavLink>
          </li>
          <li>
            <TbYoga />
            <NavLink to="/exercise" className="navlinks">
              Exercise
            </NavLink>
          </li>
          <li>
            <MdFoodBank />
            <NavLink to="/food" className="navlinks">
              Food
            </NavLink>
          </li>
          <li>
            <FiTarget />
            <NavLink to="/goals" className="navlinks">
              Goals
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
