// Native Imports
import React, { Component } from 'react';

// Components
import Landing from './landing';
import Form from '../form/form.js'

export default class home extends Component {
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
        });
    }

    render() {
        return (
            <div>
                <Form />
                <Landing />
            </div>
        )
    }
}
