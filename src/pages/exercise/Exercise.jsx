import "./exercise.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteExecise, fetchExercise } from "../../actions";
import { IoIosAdd } from "react-icons/io";
import { AddModal } from "../../component/addModal/AddModal";

export const Exercise = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);

  const handleDelete = (id) => {
    dispatch(deleteExecise(id));
  };

  useEffect(() => {
    dispatch(fetchExercise());
  }, [dispatch]);

  return (
    <div>
      <h1>Exercises</h1>
      <button className="add-btn" onClick={() => setShowModal(true)}>
        Add Exercise
        <span>
          <IoIosAdd />
        </span>
      </button>
      <div className="exercise-container">
        {exercises.map((exercise) => (
          <div className="card" key={exercise._id}>
            <div className="header">
              <h2>{exercise.name}</h2>
              <span onClick={() => handleDelete(exercise._id)}>
                <AiOutlineDelete />
              </span>
            </div>
            <p>{exercise.duration} Minutes</p>
            <p>{exercise.caloriesBurned} calories</p>
          </div>
        ))}
      </div>

      {showModal && <AddModal setShowModal={setShowModal} mode={"exercise"} />}
    </div>
  );
};
