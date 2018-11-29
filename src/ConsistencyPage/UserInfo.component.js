import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import deepOrange from '@material-ui/core/colors/deepOrange'

const styles = {
  avatar: {
    backgroundColor: deepOrange[500],
    marginRight: 10,
    display: 'inline-flex',
  }
}

const UserInfo = ({ classes, isLoggedIn, handleLogoutClick, handleLoginClick, classNames }) => (
  <>
    {
      !isLoggedIn
        ? <Button onClick={handleLoginClick} color="inherit">Login</Button>
        : (
          <>
            <Avatar className={classes.avatar}>AK</Avatar>
            <Button onClick={handleLogoutClick} color="inherit">Logout</Button>
          </>
      )
    }
  </>
)

export default withStyles(styles)(UserInfo)
