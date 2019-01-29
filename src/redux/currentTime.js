import { ACTIONS } from '../constants'

export const initialState = new Date().toString()

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_NEW_TIME:
      return new Date().toString()
    default:
      return state
  }
}

export default reducer
