import React from 'react'

import Grid from '@material-ui/core/Grid'
import MediaCard from './MediaCard/MediaCard.component'

import './Home.styles.css'

const covers = {
  norsemen: 'https://nypdecider.files.wordpress.com/2017/08/norsemen.png?w=646&h=431&crop=1',
  narcos: 'https://occ-0-987-990.1.nflxso.net/art/eb3bf/f0c7a05129d5611390af4a9f41fbf136bdeeb3bf.jpg',
  houseofcards: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/05/29/Pictures/_efc7f140-4484-11e7-9f7a-23d54b55bc46.jpg',
}

export default () => (
  <div className="container">
    <h1>Continue watching:</h1>
    <Grid
      container
      spacing={24}
    >
      <Grid
        item
        xs={6}
      >
        <MediaCard
          title="Norsemen"
          cover={covers.norsemen}
        />
      </Grid>
      <Grid
        item
        xs={6}
      >
        <MediaCard
          title="Narcos"
          cover={covers.narcos}
        />
      </Grid>
    </Grid>
  </div>
)
