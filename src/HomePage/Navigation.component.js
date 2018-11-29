import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'

export default () => (
  <div className="home-btn-container">
    <Link to="/Consistency">
      <Button
        variant="contained"
      >
        Go to consistency section
      </Button>
    </Link>
  </div>
)
