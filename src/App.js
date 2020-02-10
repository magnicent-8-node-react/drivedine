// Native Imports
import React, { Component } from 'react'

import { Provider } from 'react-redux'

// Components
import AppRoutes from './components/approutes'

// Store 
import store from './store'

export default class App extends Component {  
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>     
    )
  }
}