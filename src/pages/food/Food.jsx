import { useDispatch, useSelector } from "react-redux";
import "./food.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { fetchFood, deleteFood } from "../../actions";
import { IoIosAdd } from "react-icons/io";
import { AddModal } from "../../component/addModal/AddModal";

export const Food = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const food = useSelector((state) => state.food);

  const handleDelete = (id) => {
    dispatch(deleteFood(id));
  };

  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  return (
    <div>
      <h1>Foods</h1>
      <button className="add-btn" onClick={() => setShowModal(true)}>
        Add Food
        <span>
          <IoIosAdd />
        </span>
      </button>
      <div className="food-container">
        {food.map((food) => (
          <div className="card" key={food._id}>
            <div className="header">
              <h2>{food.name}</h2>
              <span onClick={() => handleDelete(food._id)}>
                <AiOutlineDelete />
              </span>
            </div>
            <p>Calories: {food.calories}</p>
            <p>Protein: {food.protein}</p>
            <p>Carbohydrate: {food.carbohydrates}</p>
            <p>Fat: {food.fat}</p>
          </div>
        ))}
      </div>

      {showModal && <AddModal setShowModal={setShowModal} mode={"food"} />}
    </div>
  );
};
