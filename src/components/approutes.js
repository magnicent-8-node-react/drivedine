// Native Imports
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Components
import Home from './pages/home/home.js'
import NavBar from './pages/navbar'

class AppRoutes extends Component {

  render() {
    return (
      <Router>
        <Route path="/" component={NavBar}/>
        <Route exact path="/" component={Home}/>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(AppRoutes)