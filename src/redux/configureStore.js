import { createStore, combineReducers } from 'redux'
// each initial state and reducer in its own file is much cleaner
// than combining all in store.js including initialState
import { userInitialState, userReducer } from './currentUser'

import { colors, sort, currentTime } from '../reducers'
import { initialState } from '../store'

const configureStore = () => {
  const store = createStore(
    combineReducers({
      colors, // shorthand for colors: colors
      sort,
      currentTime,
      user: userReducer,
    }), // make root reducer
    {
      ...initialState,
      user: userInitialState,
    }, // combined initial state
  )
  return store;
}

export default configureStore