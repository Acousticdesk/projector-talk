import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './HomePage/Home.component'
import ConsistencyPage from './ConsistencyPage/Consistency.component'

import './App.css'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/consistency" component={ConsistencyPage} />
    </Switch>
  </Router>
)

export default App
