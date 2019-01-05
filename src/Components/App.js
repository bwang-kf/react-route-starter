import React, { Component } from 'react'
import { BrowserRouter} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home, About, Products, ContactInject as Contact, NotFound } from './Pages'
import { counter } from '../reducers'
import Events from './Events'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  }
}

class App extends Component {
  render() {
    const { classes } = this.props
        
    return (
      <BrowserRouter>      
        <CssBaseline>
          {/* <div className={classes.container}>
            <div style={{ gridColumnEnd: 'span 3' }}>
              <MainMenu />
            </div>
            <div style={{ gridColumnEnd: 'span 9'}}>
              <Routes />
            </div>
          </div> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Redirect from="/services" to="/about/services" />
            <Route path="/events" component={Events} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </CssBaseline>
      </BrowserRouter>
    )
  }
}

export default withStyles(styles)(App)

console.log(counter(0, {type: 'INCREASE'}))
console.log(counter(5, {type: 'DECREASE'}))
console.log(counter(9, {type: 'TIMES2'}))


