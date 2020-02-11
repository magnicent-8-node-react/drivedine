// Native Imports
import React, { Component } from 'react'

// Display Phone
import phone from '../../../display.png'

// CSS
import styles from './home.module.css'

export default class landing extends Component {
    render() {
        return (
            <div className={`d-flex flex-direction-row flex-wrap`}>
                <div className={`col-md-6`}>
                    Hello
                </div>

                <div className={`d-flex justify-content-center col-md-6`}>
                    <img className={styles.landing_img} src={phone}/>
                </div>
            </div>
        )
    }
}
