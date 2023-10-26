import "./dashboard.css";
import { BsFire } from "react-icons/bs";
import { MdFoodBank } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchExercise, fetchFood, fetchGoal } from "../../actions";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const exercise = useSelector((state) => state.exercises);
  const food = useSelector((state) => state.food);
  const goals = useSelector((state) => state.goals);

  const burnedCalories = exercise.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  const consumedCalories = food.reduce(
    (total, food) => total + food.calories,
    0
  );

  const achievedCalories = burnedCalories - consumedCalories;

  const goalCalories = goals.reduce(
    (total, goal) => total + goal.targetCalories,
    0
  );

  useEffect(() => {
    dispatch(fetchExercise());
    dispatch(fetchFood());
    dispatch(fetchGoal());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <span className="count red">{burnedCalories}</span>
          <p>
            Burned
            <span>
              <BsFire />
            </span>
          </p>
        </div>

        <div className="dashboard-content">
          <span className="count blue">{consumedCalories}</span>
          <p>
            Consumed
            <span>
              <MdFoodBank />
            </span>
          </p>
        </div>

        <div className="dashboard-content">
          <span className="count green">{achievedCalories}</span>
          <p>
            Achieved
            <span>
              <GiAchievement />
            </span>
          </p>
        </div>

        <div className="dashboard-content">
          <span className="count yellow">{goalCalories}</span>
          <p>
            Goal
            <span>
              <FiTarget />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
