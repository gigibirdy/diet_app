import {
  SELECT_FOOD,
  FETCH_NUTRI_SUCCESS,
  FETCH_NUTRI_FAILURE,
  TOTAL_NUTRI
} from './actions.js';

const INITIAL_STATE = {
  targetFood: null,
  error: null,
  selectedFood: [],
  total: null
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_NUTRI_SUCCESS:
      return {
        ...state,
        error: null,
        targetFood: action.payload.nutris
      }
    case FETCH_NUTRI_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        targetFood: null
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
    default:
      return state;
  }
};
