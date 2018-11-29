import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import likePNG from '../assets/like.png'
import likeSVG from '../assets/like.svg'

/**
 * <i style={{fontSize: 32}} className={`material-icons heart-icon ${isLiked ? 'liked' : ''}`}>
 favorite
 </i>
 * @type {{card: {minWidth: number, maxWidth: number, margin: string}, bullet: {display: string, margin: string, transform: string}, title: {fontSize: number}, pos: {marginBottom: number}}}
 */


const styles = {
  card: {
    minWidth: 275,
    maxWidth: 320,
    margin: '0 auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class SimpleCard extends PureComponent {
  state = {isLiked: false}

  constructor(props) {
    super(props)
    this.handleLike = this.handleLike.bind(this)
  }

  handleLike() {
    this.setState({
      isLiked: true,
    })
  }

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    const { isLiked } = this.state;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be
            {bull}
            nev
            {bull}o{bull}
            lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a
              href="https://translate.google.com/m/translate?source=osdd#view=home&op=translate&sl=auto&tl=ru&text=benevolent"
              target="_blank"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(SimpleCard);
