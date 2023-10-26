export const fetchExercise = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker.husaini-bohrabo.repl.co/api/exercises"
    );
    const { exercises } = await response.json();
    dispatch({ type: "FETCH_EXERCISE_SUCCESS", payload: exercises });
  } catch (err) {
    console.error("Error fetching exercise data:", err);
    dispatch({ type: "FETCH_EXERCISE_FAILURE" });
  }
};

export const fetchFood = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker.husaini-bohrabo.repl.co/api/food"
    );
    const { food } = await response.json();
    dispatch({ type: "FETCH_FOOD_SUCCESS", payload: food });
  } catch (err) {
    console.error("Error fetching food data:", err);
    dispatch({ type: "FETCH_FOOD_FAILURE" });
  }
};

export const fetchGoal = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker.husaini-bohrabo.repl.co/api/goals"
    );
    const { goals } = await response.json();
    dispatch({ type: "FETCH_GOAL_SUCCESS", payload: goals });
  } catch (err) {
    console.error("Error fetching goals data:", err);
    dispatch({ type: "FETCH_GOAL_FAILURE" });
  }
};

export const addExecise = (entry) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker.husaini-bohrabo.repl.co/api/exercises",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
      }
    );
    const data = await response.json();
    dispatch({ type: "ADD_EXERCISE_SUCCESS", payload: data.exercise });
  } catch (err) {
    console.error("Error adding exercise data:", err);
    dispatch({ type: "ADD_EXERCISE_FAILURE" });
  }
};

export const addFood = (entry) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker.husaini-bohrabo.repl.co/api/food",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
      }
    );
    const data = await response.json();
    dispatch({ type: "ADD_FOOD_SUCCESS", payload: data.food });
  } catch (err) {
    console.error("Error adding food data:", err);
    dispatch({ type: "ADD_FOOD_FAILURE" });
  }
};

export const addGoal = (entry) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker.husaini-bohrabo.repl.co/api/goals",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
      }
    );
    const data = await response.json();
    dispatch({ type: "ADD_GOAL_SUCCESS", payload: data.goal });
  } catch (err) {
    console.error("Error adding goals data:", err);
    dispatch({ type: "ADD_GOAL_FAILURE" });
  }
};

export const deleteExecise = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      `https://fitness-tracker.husaini-bohrabo.repl.co/api/exercises/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    if (response.status === 204) {
      dispatch({ type: "REMOVE_EXERCISE_SUCCESS", payload: id });
    }
  } catch (err) {
    console.error("Error deteling exercise data:", err);
    dispatch({ type: "REMOVE_EXERCISE_FAILURE" });
  }
};

export const deleteFood = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      `https://fitness-tracker.husaini-bohrabo.repl.co/api/food/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (response.status === 204) {
      dispatch({ type: "REMOVE_FOOD_SUCCESS", payload: id });
    }
  } catch (err) {
    console.error("Error deleting food data:", err);
    dispatch({ type: "REMOVE_FOOD_FAILURE" });
  }
};

export const deleteGoal = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      `https://fitness-tracker.husaini-bohrabo.repl.co/api/goals/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (response.status === 204) {
      dispatch({ type: "REMOVE_GOAL_SUCCESS", payload: id });
    }
  } catch (err) {
    console.error("Error deleting goals data:", err);
    dispatch({ type: "REMOVE_GOAL_FAILURE" });
  }
};
