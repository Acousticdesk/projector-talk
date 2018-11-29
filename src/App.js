import React from 'react'
import Grid from '@material-ui/core/Grid'

import MediaCard from './MediaCard/MediaCard.component'

import './App.css'

const App = () => (
  <div className="container">
    <Grid
      container
      spacing={40}
    >
      <Grid
        item
        xs={6}
      >
        <MediaCard
          title="Norsemen"
          subtitle="by Netflix"
          cover="https://nypdecider.files.wordpress.com/2017/08/norsemen.png?w=646&h=431&crop=1"
        />
      </Grid>
      <Grid
        item
        xs={6}
      >
        <MediaCard
          title="Narcos"
          subtitle="by Netflix"
          cover="https://occ-0-987-990.1.nflxso.net/art/eb3bf/f0c7a05129d5611390af4a9f41fbf136bdeeb3bf.jpg"
        />
      </Grid>
    </Grid>
  </div>
)

export default App
