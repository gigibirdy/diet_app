import {
  SELECT_FOOD,
  FETCH_NUTRI_SUCCESS,
  FETCH_NUTRI_FAILURE,
  TOTAL_NUTRI,
  GET_FOOD_NAME
} from './actions.js';

const INITIAL_STATE = {
  targetFood: {nutris: null, foodName: ''},
  error: null,
  selectedFood: [],
  total: null,
  foodName: ''
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_NUTRI_SUCCESS:
      return {
        ...state,
        error: null,
        targetFood: {...state.targetFood, nutris: action.payload.nutris}
      }
    case FETCH_NUTRI_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        targetFood: {}
      }
    case SELECT_FOOD:
      return {
        ...state,
        selectedFood: [...state.selectedFood, action.payload.food]
      }
    case TOTAL_NUTRI:
      return {
        ...state,
        total: action.payload.total
      }
    case GET_FOOD_NAME:
      return {
        ...state,
        targetFood: {...state.targetFood, foodName: action.payload.foodName}
      }
    default:
      return state;
  }
};
