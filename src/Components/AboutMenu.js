import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  selected: {
    backgroundColor: 'white',
    color: 'slategray',    
  }
}
class AboutMenu extends Component {
  render() {
    const { classes, match } = this.props
    return (
      <nav className={classes.container}>
        <NavLink to='/about' activeClassName={match.isExact && classes.selected}>Company</NavLink>
        <NavLink to='/about/history' activeClassName={classes.selected}>History</NavLink>
        <NavLink to='/about/services' activeClassName={classes.selected}>Services</NavLink>
        <NavLink to='/about/location' activeClassName={classes.selected}>Location</NavLink>
      </nav>
    )
  }
}

export default withStyles(styles)(AboutMenu)