import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './Home.component'

import './App.css'

const App = () => (
  <div className="container">
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  </div>
)

export default App
