import { ACTIONS } from './constants'
import { combineReducers } from 'redux'

/**
 * a seprate reducer for each part of the state tree
 * return matches branch data type
 */
export const color = (state={}, action) => {
  switch (action.type) {
    case ACTIONS.ADD_COLOR: // new color object
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        timestamp: action.timestamp,
        rating: 0
      }
    case ACTIONS.RATE_COLOR: 
      return (state.id !== action.id) ? state : {...state, rating: action.rating}
    default:
      return state
  }
}

export const colors = (state=[], action) => {
  switch (action.type) {
    case ACTIONS.ADD_COLOR:
      return [...state, color({}, action)]
    case ACTIONS.REMOVE_COLOR:
      return state.filter(c => c.id !== action.id)
    case ACTIONS.RATE_COLOR:
      return state.map(c => color(c, action))
    default:
      return state
  }
}

export const sort = (state={}, action) => {
  switch (action.type) {
    case ACTIONS.SORT_COLORS:
      return action.sortBy
    default:
      return state
  }
}

export const counter = (state=0, action) => {
  switch (action.type) {
    case ACTIONS.INCREASE:
      return state + 1
    case ACTIONS.DECREASE:
      return state - 1
    default:
      return state
  }
}

// export const currentTime = (state={}, action) => {
//     switch (action.type) {
//       case ACTIONS.FETCH_NEW_TIME:
//         return new Date().toString()
//       default:
//         return state
//   }
// }

// export const rootReducer = combineReducers({colors, sort, currentTime})
