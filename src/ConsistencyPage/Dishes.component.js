import React from 'react'

import Grid from '@material-ui/core/Grid'

import DishCard from './DishCard.component'

import dishes from './Dishes.data'

import './Dishes.styles.css'

export default ({ isLoggedIn }) => (
  <div className="container dishes-container">
    <Grid container spacing={40}>
      {
        isLoggedIn
          ? dishes.map(dish => (
            <Grid item>
              <DishCard
                src={dish.src}
                name={dish.name}
                description={dish.description}
              />
            </Grid>
          ))
          : dishes.map(dish => dish.discount ? null : (
            <Grid item>
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
