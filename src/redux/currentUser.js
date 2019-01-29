import { ACTIONS } from '../constants'

// TODO: rename reducer to matches the store state that those reducers will operate on.
export const initialState = {
  user: {},
  loggedIn: false,
}

export const reducer = (state=initialState, action) => {
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

export default reducer