import React from 'react'
import PageTemplate from './PageTemplate'
import { connect } from 'react-redux'
import { fetchNewTime } from '../redux/actionCreators'

const Events = (props) => (
  <PageTemplate>
  <section>
    <h1>Events Calendar</h1>
    <div>Current Time: {props.currentTime}</div>
    <button onClick={props.update}>Update</button>
  </section>
  </PageTemplate>
)
// read data from state then inject into component via connect
const mapStateToProps = state => {
  return {
    currentTime: state.currentTime
  }
}
// inject dispatcher function into component via connect
const mapDispatchToProps = dispatch => ({
  updateTime: () => dispatch(fetchNewTime()),
  update: () => dispatch(fetchNewTime()), // same thing, can pass multiple calls
})
// https://redux.js.org/recipes/reducing-boilerplate
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events)