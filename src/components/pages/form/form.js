// Native Imports
import React, { Component } from 'react';

// Components
import CenterForm from './centerform'

// Redux
import { connect } from 'react-redux'

// CSS
import styles from './form.module.css';

class Form extends Component {
    render() {
        return (
            <div className={`${styles.form_popup} ${this.props.form.formActive ? styles.form_popup_wrap : styles.form_disable}`}>
                <CenterForm />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    form: state.form
})

export default connect(mapStateToProps)(Form);