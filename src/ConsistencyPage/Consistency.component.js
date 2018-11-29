import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import UserInfo from './UserInfo.component'
import Dishes from './Dishes.component'

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
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            {
              !isLoggedIn
                ? <Button onClick={this.handleLoginClick} color="inherit">Login</Button>
                : <UserInfo handleLogoutClick={this.handleLogoutClick} />
            }
          </Toolbar>
        </AppBar>
        <Dishes isLoggedIn={isLoggedIn} />
      </div>
    )
  }
}

export default withStyles(styles)(ButtonAppBar)
