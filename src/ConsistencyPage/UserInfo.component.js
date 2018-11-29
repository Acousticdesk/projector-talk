import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import deepOrange from '@material-ui/core/colors/deepOrange'

const styles = {
  avatar: {
    backgroundColor: deepOrange[500],
    marginRight: 10
  }
}

const UserInfo = ({ classes, handleLogoutClick }) => (
  <>
    <Avatar className={classes.avatar}>AK</Avatar>
    <Button onClick={handleLogoutClick} color="inherit">Logout</Button>
  </>
)

export default withStyles(styles)(UserInfo)
