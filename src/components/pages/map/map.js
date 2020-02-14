// Native Imports
import React, { Component } from 'react'

// Mapbox
import mapboxgl from 'mapbox-gl'

// CSS
import styles from './map.module.css'

// Set Mapbox Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVkaW5lMiIsImEiOiJjazZsYzRwdmUwZG1lM211OXNlb2JsYnRiIn0.ZDOFdh3cuDMQZt9FPnZ-jw';

// Mapbox class
export default class map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: 5,
        lat: 34,
        zoom: 2
        };
    }

    mapStyle = {
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0',
        bottom: '0',
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        });
    }

    render() {
        return (
            <div className={`d-flex justify-content-center ${styles.map_wrap}`}>
                <div ref={el => this.mapContainer = el} style={this.mapStyle} className="mapContainer"/>
                {/* <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.60896295643!2d-119.78801758502485!3d36.73195157923884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945e26d4340503%3A0xb32dda71cf0730a0!2sBitwise%20South%20Stadium!5e0!3m2!1sen!2sus!4v1581459346746!5m2!1sen!2sus"
                className={styles.i_frame}>
                </iframe> */}
            </div>
        )
    }
}
