import { useState } from "react";
import "./addmodal.css";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addExecise, addFood, addGoal } from "../../actions";

export const AddModal = ({ setShowModal, mode }) => {
  const [newExercise, setNewExercise] = useState({
    name: "",
    duration: "",
    caloriesBurned: ""
  });

  const [newFood, setNewFood] = useState({
    name: "",
    calories: "",
    protein: "",
    carbohydrates: "",
    fat: ""
  });

  const [newGoal, setNewGoal] = useState({
    name: "",
    description: "",
    targetDate: "",
    targetCalories: "",
    status: "In Progress"
  });

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mode === "exercise"
      ? dispatch(addExecise(newExercise))
      : mode === "food"
      ? dispatch(addFood(newFood))
      : dispatch(addGoal(newGoal));
    setShowModal(false);
  };

  return (
    <div className="add-form-modal">
      <div className="add-form-modal-container">
        <div className="modal-header">
          <h2>
            Add{" "}
            {mode === "exercise"
              ? "Exercise"
              : mode === "food"
              ? "Food"
              : "Goals"}
          </h2>
          <span onClick={() => setShowModal(false)}>
            <RxCross2 />
          </span>
        </div>
        {mode === "exercise" && (
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={newExercise.name}
              onChange={(e) =>
                setNewExercise({ ...newExercise, name: e.target.value })
              }
              placeholder="Enter Exercise Name"
            />
            <input
              type="number"
              value={newExercise.duration}
              onChange={(e) =>
                setNewExercise({ ...newExercise, duration: e.target.value })
              }
              placeholder="Enter Exercise Duration"
            />
            <input
              type="number"
              value={newExercise.caloriesBurned}
              onChange={(e) =>
                setNewExercise({
                  ...newExercise,
                  caloriesBurned: e.target.value
                })
              }
              placeholder="Enter Calories Burned"
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}

        {mode === "food" && (
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={newFood.name}
              onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
              placeholder="Enter Food Name"
            />
            <input
              type="number"
              value={newFood.calories}
              onChange={(e) =>
                setNewFood({ ...newFood, calories: e.target.value })
              }
              placeholder="Enter Food Calories"
            />
            <input
              type="number"
              value={newFood.protein}
              onChange={(e) =>
                setNewFood({ ...newFood, protein: e.target.value })
              }
              placeholder="Enter Food Protein"
            />
            <input
              type="number"
              value={newFood.carbohydrates}
              onChange={(e) =>
                setNewFood({ ...newFood, carbohydrates: e.target.value })
              }
              placeholder="Enter Food Carbohydrates"
            />
            <input
              type="number"
              value={newFood.fat}
              onChange={(e) => setNewFood({ ...newFood, fat: e.target.value })}
              placeholder="Enter Food Fat"
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}

        {mode === "goal" && (
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={newGoal.name}
              onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
              placeholder="Enter Goal Name"
            />
            <input
              type="text"
              value={newGoal.description}
              onChange={(e) =>
                setNewGoal({ ...newGoal, description: e.target.value })
              }
              placeholder="Enter Goal Description"
            />
            <input
              type="date"
              value={newGoal.targetDate}
              onChange={(e) =>
                setNewGoal({ ...newGoal, targetDate: e.target.value })
              }
            />
            <input
              type="number"
              value={newGoal.targetCalories}
              onChange={(e) =>
                setNewGoal({ ...newGoal, targetCalories: e.target.value })
              }
              placeholder="Enter Goal Calories"
            />
            <select
              value={newGoal.status}
              onChange={(e) =>
                setNewGoal({ ...newGoal, status: e.target.value })
              }
            >
              <option value="In-Progress">In-progress</option>
              <option value="Achieved">Achieved</option>
            </select>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
