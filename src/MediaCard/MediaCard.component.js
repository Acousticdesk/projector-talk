import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import SkipNextIcon from '@material-ui/icons/SkipNext'

import styles from './styles'

const MediaCard = ({ classes, theme, title, subtitle, cover }) => (
  <Card className={classes.card}>
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          { title }
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          { subtitle }
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        <IconButton aria-label="Previous">
          {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        {/* TODO: Implement rect hooks for handling play button click */}
        <IconButton aria-label="Play/pause">
          <PlayArrowIcon className={classes.playIcon} />
        </IconButton>
        <IconButton aria-label="Next">
          {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
      </div>
    </div>
    <CardMedia
      className={classes.cover}
      image={cover}
      title="Live from space album cover"
    />
  </Card>
)

export default withStyles(styles, { withTheme: true })(MediaCard)
