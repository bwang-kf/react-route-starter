import { ACTIONS } from '../constants'

export const userInitialState = {
  user: {},
  loggedIn: false,
}

export const userReducer = (state=userInitialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state, 
        user: action.payload,
        loggedIn: true,
      }
    case ACTIONS.LOGOUT:
      return {
        ...state,
        user: {},
        loggedIn: false,
      }
    default:
      return state;
  }
}