import { combineReducers } from 'redux'

function restaurants(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return [
      ...state,
      {
        name: action.name,
        food_type: action.food_type,
        location: action.location
      }]
    case 'ADD_RESTAURANTS':
      return state.concat(action.restaurants);

    default:
      return state
  }
};

function reservations(state = [], action) {
  switch (action.type) {
    case 'ADD_RESERVATION':
      return [...state,
        {
          id: action.id,
          party_size: action.party_size,
          time_added: action.time_added,
          completed: false
        }]
    case 'ADD_RESERVATIONS':
      return action.reservation_list;

    case 'TABLE_SEATED':
      return [...state,
        {
          resId: action.reservation_id,
          completed: action.completed
        }
      ]
    default:
      return state
  }
}

const reducers = combineReducers ({
  restaurants,
  reservations
});

export default reducers;
