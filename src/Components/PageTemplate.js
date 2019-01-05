import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MainMenu from './MainMenu'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  nav: {
    gridColumnEnd: 'span 2',
  },
  content: {
    gridColumnEnd: 'span 10',
  }
}

class PageTemplate extends Component {  
  render() {
    const { classes, children } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.nav}>
          <MainMenu />
        </div>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PageTemplate)