// Native Imports
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Actions
import { getLocation } from '../actions/auth'

// Components
import Home from './pages/home/home.js'
import NavBar from './pages/navbar'
import MapPage from './pages/map/map.js'

class AppRoutes extends Component {
  componentDidMount() {
    this.props.getLocation();
  }

  render() {
    return (
      <Router>
        <Route path="/" component={NavBar}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/map" component={MapPage}/>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { getLocation })(AppRoutes)