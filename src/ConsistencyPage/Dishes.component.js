import React from 'react'

import Grid from '@material-ui/core/Grid'

import DishCard from './DishCard.component'

import dishes from './Dishes.data'

import './Dishes.styles.css'

export default ({ isLoggedIn }) => (
  <div className="container dishes-container consistency__dishes-section">
    <h2 className="consistency__dishes-heading">Dishes crafted with ❤️ for {!isLoggedIn ? 'you' : 'Projector students'}:</h2>
    <Grid container spacing={40}>
      {
        isLoggedIn
          ? dishes.map(dish => (
            <Grid xs={3} item>
              <DishCard
                src={dish.src}
                name={dish.name}
                description={dish.description}
              />
            </Grid>
          ))
          : dishes.map(dish => dish.discount ? null : (
            <Grid xs={3} item>
              <DishCard
                src={dish.src}
                name={dish.name}
                description={dish.description}
              />
            </Grid>
          ))
      }
    </Grid>
  </div>
)
