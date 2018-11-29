import React, { PureComponent } from 'react'

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

const getSwitchedEpisode = (direction, episode) => (
  direction === 'next' ? (episode + 1) : (episode - 1)
)

class MediaCard extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      episode: 1
    }
    this.handleNavigationControlClick = this.handleNavigationControlClick.bind(this)
    this.handlePlayClick = this.handlePlayClick.bind(this)
  }
  handleNavigationControlClick(direction) {
    return () => {
      this.setState(({ episode }) => ({
        episode: getSwitchedEpisode(direction, episode)
      }))
    }
  }
  handlePlayClick() {
    this.setState({ isPlaying: true })
  }
  render() {
    const { classes, theme, title, subtitle, cover } = this.props
    const { episode, isPlaying } = this.state

    return (
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              { title }
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              { subtitle }
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {
                isPlaying
                  ? 'Buffering...'
                  : `Season 1 ep ${ episode }`
              }
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton onClick={this.handleNavigationControlClick('previous')} aria-label="Previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            {/* TODO: Implement rect hooks for handling play button click */}
            <IconButton onClick={this.handlePlayClick} aria-label="Play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton onClick={this.handleNavigationControlClick('next')} aria-label="Next">
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
  }
}

export default withStyles(styles, { withTheme: true })(MediaCard)
