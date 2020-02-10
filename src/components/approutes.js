// Native Imports
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

class AppRoutes extends Component {

  render() {
    return (
      <Router>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(AppRoutes)