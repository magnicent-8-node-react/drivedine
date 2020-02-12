// Native Imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Actions
import { formToggle } from '../../../actions/form'

// CSS
import styles from './home.module.css'

// Images
import waves from '../../../waves.png'
import phone from '../../../display.png'

class Landing extends Component {
    state = {
        login: true // Temporary due to no Auth
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
                            <Link to="products">
                                <button onClick={this.toggle} className={`${styles.left_land_button} btn btn-light`}>Local Map</button>
                            </Link>
                            {this.state.login ? <button className="btn btn-light" onClick={this.props.formToggle}>Get Started</button> 
                            : <button className="btn btn-light" onClick={this.props.formToggle}>Sign Up</button>}
                        </div>
                        

                    </div>
                </div>

                <div className={`d-flex justify-content-center col-md-6 ${styles.phone_section} ${styles.test_b}`}>
                    <img alt="phone" className={styles.landing_img} src={phone}/>
                </div>
                <img src={waves} className={styles.wave_img} alt="waves"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    form: state.form
})

export default connect(mapStateToProps, {formToggle})(Landing)