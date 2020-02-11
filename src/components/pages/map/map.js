// Native Imports
import React, { Component } from 'react'

// CSS
import styles from './map.module.css'

export default class map extends Component {
    render() {
        return (
            <div className={`d-flex justify-content-center`}>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.60896295643!2d-119.78801758502485!3d36.73195157923884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945e26d4340503%3A0xb32dda71cf0730a0!2sBitwise%20South%20Stadium!5e0!3m2!1sen!2sus!4v1581459346746!5m2!1sen!2sus"
                className={styles.i_frame}>
                </iframe>
            </div>
        )
    }
}
