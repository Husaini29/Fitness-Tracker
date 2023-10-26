import { useDispatch, useSelector } from "react-redux";
import "./goal.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { fetchGoal, deleteGoal } from "../../actions";
import { IoIosAdd } from "react-icons/io";
import { AddModal } from "../../component/addModal/AddModal";

export const Goal = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals);

  const handleDelete = (id) => {
    dispatch(deleteGoal(id));
  };

  useEffect(() => {
    dispatch(fetchGoal());
  }, [dispatch]);

  return (
    <div>
      <h1>Goals</h1>
      <button className="add-btn" onClick={() => setShowModal(true)}>
        Add Goals
        <span>
          <IoIosAdd />
        </span>
      </button>
      <div className="goal-container">
        {goals.map((goal) => (
          <div className="card" key={goal._id}>
            <div className="header">
              <h2>{goal.name}</h2>
              <span onClick={() => handleDelete(goal._id)}>
                <AiOutlineDelete />
              </span>
            </div>
            <p>{goal.description}</p>
            <p>{new Date(goal?.targetDate).toLocaleDateString()}</p>
            <p>{goal.targetCalories}</p>
            <p>{goal.status}</p>
          </div>
        ))}
      </div>

      {showModal && <AddModal setShowModal={setShowModal} mode={"goal"} />}
    </div>
  );
};
