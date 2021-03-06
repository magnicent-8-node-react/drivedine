// Native Imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// CSS
import styles from './home/home.module.css'

// Logo
import logo from '../../logo.png'

// Icons
import { FaTwitter, FaInstagram, FaFacebook, FaBars, FaTimes } from 'react-icons/fa'

export default class navbar extends Component {
    state = {
        linkStyle: styles.links_wrap,
        toggleDropDown: false
    }

    toggleDropDown = () => {
        if(!this.state.toggleDropDown) {
            this.setState({linkStyle: `${this.state.linkStyle} ${styles.drop}`})
        } else {
            this.setState({linkStyle: styles.links_wrap})
        }
        this.setState({toggleDropDown: !this.state.toggleDropDown})
    }
    
    render() {
        return (
            <div className={`d-flex flex-direction-row flex-wrap ${styles.header_wrap}`}>

                <div className={'col-md-3 col-3'}>
                    <Link to="/">
                        <img src={logo} alt="Logo" className={styles.header_img}/>
                    </Link>
                </div>

                <div className={`col-md-6 col-6 ${this.state.linkStyle}`}>
                    <Link className={styles.header_link} to="/">Home</Link>
                    <Link className={styles.header_link} to="/map">Map</Link>
                    <Link className={styles.header_link} to="/features">Features</Link>
                    <Link className={styles.header_link} to="/pricing">Pricing</Link>
                </div>

                <div className={`col-md-3 col-3 ${styles.icons_wrap}`}>
                    <FaTwitter className={styles.header_icon}/>
                    <FaFacebook className={styles.header_icon}/>
                    <FaInstagram className={styles.header_icon}/>
                </div>

                <div className={styles.dropdown_wrap}>
                    {!this.state.toggleDropDown ? <FaBars onClick={this.toggleDropDown}/> :
                    <FaTimes onClick={this.toggleDropDown}/>}
                </div>

            </div>
        )
    }
}
