const initialState = {
  exercises: [],
  food: [],
  goals: [],
  loading: false,
  error: null
};

export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXERCISE_SUCCESS":
      return {
        ...state,
        exercises: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_FOOD_SUCCESS":
      return {
        ...state,
        food: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_GOAL_SUCCESS":
      return {
        ...state,
        goals: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_EXERCISE_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching exercise data"
      };

    case "FETCH_FOOD_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching food data"
      };

    case "FETCH_GOAL_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching goals data"
      };

    case "ADD_EXERCISE_SUCCESS":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        loading: false,
        error: null
      };

    case "ADD_FOOD_SUCCESS":
      return {
        ...state,
        food: [...state.food, action.payload],
        loading: false,
        error: null
      };

    case "ADD_GOAL_SUCCESS":
      return {
        ...state,
        goals: [...state.goals, action.payload],
        loading: false,
        error: null
      };

    case "ADD_EXERCISE_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error adding execise data"
      };

    case "ADD_FOOD_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error adding execise data"
      };

    case "ADD_GOAL_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error adding execise data"
      };

    case "REMOVE_EXERCISE_SUCCESS":
      return {
        ...state,
        exercises: state.exercises.filter(({ _id }) => _id !== action.payload),
        loading: false,
        error: null
      };

    case "REMOVE_FOOD_SUCCESS":
      return {
        ...state,
        food: state.food.filter(({ _id }) => _id !== action.payload),
        loading: false,
        error: null
      };

    case "REMOVE_GOAL_SUCCESS":
      return {
        ...state,
        goals: state.goals.filter(({ _id }) => _id !== action.payload),
        loading: false,
        error: null
      };

    case "REMOVE_EXERCISE_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error deleting exercise data"
      };

    case "REMOVE_FOOD_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error deleting food data"
      };

    case "REMOVE_GOAL_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error deleting goals data"
      };

    case "FETCH_DATA_LOADING":
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
