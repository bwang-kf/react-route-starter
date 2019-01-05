import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

// TODO: move store code to a root component?
const store = configureStore()
const unsubscribeLogger = store.subscribe(() =>
  console.log(`${JSON.stringify(store.getState(), null, 2)}`)
)

// TODO: this is just a test for store subscribe call above, need unit test coverage
store.dispatch({
  type: "RATE_COLOR",
  id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
  rating: 1
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// hot reload for dev
if (module.hot) {
  module.hot.accept()
}

