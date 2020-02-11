// Native Imports
import React, { Component } from 'react'

// Components
import Header from './header'
import Landing from './landing'

export default class home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Landing />
            </div>
        )
    }
}
