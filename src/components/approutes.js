// Native Imports
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Home from './pages/home/home.js'
import NavBar from './pages/navbar'
import MapPage from './pages/map/map.js'
import Form from './pages/form/form.js'
import Dashboard from './pages/dashboards/dashboards.js'
import Pricing from './pages/pricing/pricing.js'

export default class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={NavBar}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/" component={Form} />
        <Route exact path="/map" component={MapPage}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/pricing" component={Pricing}/>
      </Router>
    )
  }
}