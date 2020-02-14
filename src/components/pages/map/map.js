// Native Imports
import React, { Component } from 'react'

// Mapbox
import mapboxgl from 'mapbox-gl'

// Redux
import { connect } from 'react-redux'

// Actions
import { getLocation } from '../../../actions/auth'

// CSS
import styles from './map.module.css'

// Set Mapbox Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVkaW5lMiIsImEiOiJjazZsYzRwdmUwZG1lM211OXNlb2JsYnRiIn0.ZDOFdh3cuDMQZt9FPnZ-jw';

// Mapbox class
class Map extends Component {
    componentDidMount() {
        this.props.getLocation();
        let { lat, long } = this.props.auth.location
        
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [long, lat],
            zoom: 14
        });
    }

    render() {
        return (
            <div className={`d-flex justify-content-center ${styles.map_wrap}`}>
                <div ref={el => this.mapContainer = el} className={`mapContainer ${styles.map_container}`}/>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
//     auth: state.auth
// })

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { getLocation })(Map)