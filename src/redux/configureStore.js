import { createStore, combineReducers, applyMiddleware } from 'redux'
// each initial state and reducer in its own file is much cleaner
// than combining all in store.js including initialState
import * as currentUser from './currentUser'
import * as currentTime from './currentTime'

import { colors, sort } from '../reducers'
import { initialState as initState} from '../store'
import { loggingMiddleware } from './loggingMiddleware'
import { apiMiddleware } from './apiMiddleware';

const rootReducer = combineReducers({
  colors,
  sort,
  currentTime: currentTime.reducer,
  user: currentUser.reducer,
})

const initialState = {
  ...initState,
  currentTime: currentTime.initialState,
  user: currentUser.initialState
}

const configureStore = () => {
  /*
  const store = createStore(
    combineReducers({
      colors, // shorthand for colors: colors
      sort,
      currentTime,
      user: userReducer,
    }), // make root reducer
    {
      ...initialState,
      // currentTime: currentTimeInitialState, // reducer has initial state already
      user: userInitialState,
    }, // combined initial state
  ) */

  const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(
      apiMiddleware,
      loggingMiddleware,
    )
  )
  return store;
}

export default configureStore