import React from 'react'
import { Route } from 'react-router-dom'
import PageTemplate from './PageTemplate'
import AboutMenu from './AboutMenu'
import { connect } from 'react-redux'

export const Home = () => (
  <PageTemplate>
  <section>
    <h1>Home page</h1>
  </section>
  </PageTemplate>
)

export const About = () => (
  <PageTemplate>
  <section>
    <Route component={AboutMenu} />
    <Route exact path="/about" render={() => <div>About the company</div>} />
    <Route path="/about/history" render={() => <div>company history</div>} />
    <Route path="/about/services" render={() => <div>service we provice</div>} />
    <Route path="/about/location" render={() => <div>global locations</div>} />
  </section>
  </PageTemplate>
)



export const Products = () => (
  <PageTemplate>
  <section>
    <h1>Product Catalog</h1>
  </section>
  </PageTemplate>
)

/* using export contactinject is just an experiment, works but
   should make contact its own class like Events.js */
const Contact = (props) => (
  <PageTemplate>
  <section>
    <h1>Contact Us</h1>
    <div>Current Time: {props.currentTime}</div>
  </section>
  </PageTemplate>
)
const mapStateToProps = state => {
  return {
    currentTime: state.currentTime
  }
}
export const ContactInject = connect(mapStateToProps)(Contact)

export const NotFound = ({location}) => (
  <section>
    <h1>Resource Not Found {location.pathname}</h1>
  </section>
)
