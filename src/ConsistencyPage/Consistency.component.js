import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import UserInfo from './UserInfo.component'
import Dishes from './Dishes.component'

import './Consistency.styles.css'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
}

class ButtonAppBar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true })
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false })
  }
  render() {
    const { classes } = this.props
    const { isLoggedIn } = this.state

    return (
      <>
        <div className="content">
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                  News
                </Typography>
                <UserInfo
                  isLoggedIn={isLoggedIn}
                  handleLogoutClick={this.handleLogoutClick}
                  handleLoginClick={this.handleLoginClick}
                />
              </Toolbar>
            </AppBar>
            <Dishes isLoggedIn={isLoggedIn} />
          </div>
        </div>
        <footer>
          <UserInfo
            isLoggedIn={isLoggedIn}
            handleLogoutClick={this.handleLogoutClick}
            handleLoginClick={this.handleLoginClick}
          />
        </footer>
      </>
    )
  }
}

export default withStyles(styles)(ButtonAppBar)
