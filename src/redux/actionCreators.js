import { ACTIONS } from '../constants'

const host = 'https://andthetimeis.com'

export const fetchNewTime = ({timezone = 'pst', str = 'now'}) => ({
  type: ACTIONS.FETCH_NEW_TIME,
  payload: new Date().toString(),
  meta: {
    type: 'api',
    url: `${host}/${timezone}/${str}.json`,
  }
})

export const login = (user) => ({
  type: ACTIONS.LOGIN,
  payload: user
})

export const logout = () => ({
  type: ACTIONS.LOGOUT,
})