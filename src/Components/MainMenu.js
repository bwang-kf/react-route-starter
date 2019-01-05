import React, { Fragment, Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import Home from '@material-ui/icons/Home'

const styles = {
  container: {
    display: 'grid',
  },
  selected: {
    backgroundColor: 'white',
    color: 'slategray',    
  }
}
class MainMenu extends Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
          <nav className={classes.container}>
            <NavLink to='/'><Home /></NavLink>
            <NavLink to='/about' activeClassName={classes.selected}>About</NavLink>
            <NavLink to='/events' activeClassName={classes.selected}>Events</NavLink>
            <NavLink to='/products' activeClassName={classes.selected}>Products</NavLink>
            <NavLink to='/contact' activeClassName={classes.selected}>Contact</NavLink>

            { /* simple link 
            <Link to='about'>About</Link>
            <Link to='events'>Events</Link>
            <Link to='products'>Products</Link>
            <Link to='contact'>Contact</Link>
            */ }
          </nav>
      </Fragment>
    )
  }
}
export default withStyles(styles)(MainMenu)