// Native Imports
import React, { Component } from 'react'

// Display Phone
import phone from '../../../display.png'

// CSS
import styles from './home.module.css'

export default class landing extends Component {
    state = {
        login: true
    }

    render() {
        return (
            <div className={`d-flex flex-direction-row flex-wrap ${styles.landing_section}`}>
                <div className={`col-md-6 ${styles.text_section} ${styles.test_b}`}>
                    <div className={`${styles.text_wrap} ${styles.test_b}`}>
                        <h1>DriveDine for finding trucks</h1>
                        <p>
                            Cillum eiusmod voluptate commodo consectetur nisi reprehenderit
                            in veniam mollit eiusmod nulla adipisicing incididunt.
                            Cillum eiusmod voluptate commodo consectetur nisi reprehenderit
                            in veniam mollit eiusmod nulla adipisicing incididunt.
                        </p>
                        <div className={`${styles.land_button_wrap}`}>
                            <button className={`${styles.left_land_button}`}>View Local Map</button>
                            {!this.state.login ? <button>Login</button> : <button>Sign Up</button>}
                        </div>
                        

                    </div>
                </div>

                <div className={`d-flex justify-content-center col-md-6 ${styles.phone_section} ${styles.test_b}`}>
                    <img alt="phone" className={styles.landing_img} src={phone}/>
                </div>
            </div>
        )
    }
}
