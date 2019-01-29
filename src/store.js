import { createStore } from 'redux'
import { rootReducer } from './reducers'

export const initialState = {
  colors: [{
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036",
      title: "Rad Red",
      color: "#FF0000",
      rating: 3,
      timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
    }, {
      timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
    }, {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
      title: "Big Blue",
      color: "#0000FF",
      rating: 5,
      timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
    }
  ],
  sort: "SORTED_BY_TITLE",
}

// export const store = createStore(
//   rootReducer,
//   initialState // optionally with an initialState
// ) // can use any reducer to create a store

// const unsubscribeLogger = store.subscribe(() =>
//   console.log(`${JSON.stringify(store.getState(), null, 2)}`)
// )

/* used to unsubscribe later
unsubscribeLogger()
*/

/*
console.log(
  `created store ${JSON.stringify(store.getState(), null, 2)}`
) // null 2 for pretty print
*/

// store.dispatch({
//   type: "RATE_COLOR",
//   id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
//   rating: 1
// })

// store.dispatch({
//   type: "RATE_COLOR",
//   id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
//   rating: 1
// })

/*
console.log(
  `Color rating after RATE_COLOR ${store.getState().colors[1].rating}`
) */

