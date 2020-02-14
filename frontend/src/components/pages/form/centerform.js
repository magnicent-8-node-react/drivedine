// Native Imports
import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'

// Actions
import { formToggle, formTypeToggle, scrollType } from '../../../actions/form'

// React Icons
import { FaTimes } from 'react-icons/fa'

// CSS
import styles from './form.module.css'

class CenterForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    formSubmit = (e) => {
        let { formType } = this.props.form;

        e.preventDefault();
        if(formType) {
            alert('Welcome: ' + this.state.name)
        } else {
            alert('Welcome back: ' + this.state.name)
        }

        this.props.formToggle();
    }

    formType = () => {
        this.props.formTypeToggle();
    }

    toggleInput = (e) => {
        let { name, value } = e.target
        console.log(this.state)
        this.setState({[name]: value})
    }

    formToggle = () => {
        this.props.formToggle();
        scrollType(this.props.form.formActive);
    }

    render() {
        let { formType } = this.props.form;
        return (
            <form onSubmit={this.formSubmit} className={`${styles.form_center_wrap}`}>
                <div onClick={this.formToggle} className={`${styles.form_exit_wrap}`}>
                    <FaTimes className={`${styles.times_icon}`}/>
                </div>
                <div className={styles.form_header}>
                    {formType ? 'Register' : 'Login'}
                </div>
                {formType ?  
                <div className={`form-group`}>
                    <label htmlFor="exampleInputName1">Full Name</label>
                    <input onChange={this.toggleInput} value={this.state.name} name="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name"/>
                </div>: null}
                <div className={`form-group`}>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={this.toggleInput} value={this.state.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={this.toggleInput} value={this.state.password} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className={`btn btn-light ${styles.submit_button}`}>Submit</button>
                {formType ? <button type="button" onClick={this.formType} className="btn btn-light">Login</button> 
                : <button type="button" onClick={this.formType} className="btn btn-light">Register</button>}
            </form>
        )
    }
}

const mapStateToProps = state => ({
    form: state.form,
})

export default connect(mapStateToProps, { formToggle, formTypeToggle })(CenterForm)


/*
If person is registered, they'll authenticate and form will no
longer show at all

If person isn't registered they'll be prompted to login/register

login or register will call two different endpoints of auth api
*/