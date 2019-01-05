import { ACTIONS } from '../constants'

export const fetchNewTime = () => ({
  type: ACTIONS.FETCH_NEW_TIME,
  payload: new Date().toString(),
})

export const login = (user) => ({
  type: ACTIONS.LOGIN,
  payload: user
})

export const logout = () => ({
  type: ACTIONS.LOGOUT,
})