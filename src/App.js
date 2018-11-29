import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GridPage from './GridPage/Grid.component'
import ConsistencyPage from './ConsistencyPage/Consistency.component'
import IconsPage from './IconsPage/Icons.component'

import './App.css'

const App = () => (
  <Router>
    <Switch>
      <Route path="/grid" exact component={GridPage} />
      <Route path="/consistency" component={ConsistencyPage} />
      <Route path="/icons" component={IconsPage} />
    </Switch>
  </Router>
)

export default App
