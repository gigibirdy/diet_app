import {key, id} from './config.js';
export const SELECT_FOOD = 'SELECT_FOOD';
export const FETCH_NUTRI_SUCCESS = 'FETCH_NUTRI_SUCCESS';
export const FETCH_NUTRI_FAILURE = 'FETCH_NUTRI_FAILURE';
export const TOTAL_NUTRI = 'TOTAL_NUTRI';

export function fetchNutri(data = 'milk') {
  return dispatch => {
    return fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
      method: 'POST',
      body: JSON.stringify({"query": data}),
      headers:{
             'Content-Type': 'application/json',
             'x-app-key': key,
             'x-app-id': id}
    })
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchNutriSuccess(json.foods[0]));
      return json.foods[0];
    })
    .catch(error => dispatch(fetchNutriFailure(error)))
  };
}

function handleErrors (response) {
  if(!response.ok){
    throw Error(response.statusText);
  }
  return response;
}

export const fetchNutriSuccess = nutris => ({
  type: FETCH_NUTRI_SUCCESS,
  payload: {nutris}
})

export const fetchNutriFailure = error => ({
  type: FETCH_NUTRI_FAILURE,
  payload: {error}
})

export const selectFood = food => ({
  type: SELECT_FOOD,
  payload: {food}
})

export const caculateTotal = (selectedFood) => {
  let total = {};
  for(let food of selectedFood){
    for(let item in food){
      if(item.includes('nf') ){
      total[item] = ( total[item] + Math.floor(food[item])) ||  Math.floor(food[item])
      }
    }
  }
  return ({
    type: TOTAL_NUTRI,
    payload: {total}
  });
}
