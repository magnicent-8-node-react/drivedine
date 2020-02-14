// Native Imports
import React, { Component } from 'react';

// Components
import Landing from './landing';
import Form from '../form/form.js'

export default class home extends Component {
    render() {
        return (
            <div>
                <Form />
                <Landing />
            </div>
        )
    }
}
