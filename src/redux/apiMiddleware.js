import axios from "axios";

export const apiMiddleware = store => next => action => {
  if (!action.meta || action.meta.type != 'api') {
    return next(action)
  }

  const {url} = action.meta;
  const fetchOptions = Object.assign({}, action.meta)

  axios.get(url)
    .then(result => {
      let newAction = Object.assign({}, action, {payload: result.data})
      delete newAction.meta
      store.dispatch(newAction)
    })
}