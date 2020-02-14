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

// Test Image
import icon from '../../../pointer.png'

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

        /* Commented Code Should Automate Points */
        // async function getTrucks() {
        //     const res = await fetch('https://drivedineapi.herokuapp.com/api');
        //     const data = await res.json();
          
        //     const trucks = data.data.map(truck => {
        //       return {
        //         type: 'Feature',
        //         geometry: {
        //           type: 'Point',
        //           coordinates: [
        //             truck.location.coordinates[0],
        //             truck.location.coordinates[1]
        //           ]
        //         },
        //         properties: {
        //           truckId: truck.storeId,
        //           icon: `${icon}`
        //         }
        //       };
        //     });
        //     loadMap(trucks);
        // }

        // function loadMap(trucks) {
        //     map.on('load', function() {
        //       map.addLayer({
        //         id: 'points',
        //         type: 'symbol',
        //         source: {
        //           type: 'geojson',
        //           data: {
        //             type: 'FeatureCollection',
        //             features: trucks
        //           }
        //         },
        //         layout: {
        //           'icon-image': '{icon}',
        //           'icon-size': 1.5,
        //           'text-field': '{storeId}',
        //           'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        //           'text-offset': [0, 0.9],
        //           'text-anchor': 'top'
        //         }
        //       });
        //     });
        // }

        map.on('load', function () {

            map.loadImage(
                icon,
                function(error, image) {
                    if (error) throw error;
                    map.addImage('icon', image);
                    map.addSource('point', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': [{
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [long, lat]
                            }}]
                    }}
            )});

        map.addLayer({
            id: 'points',
            type: 'symbol',
            source: {
                type: 'geojson',
                data: {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [long, lat]
                    }
                }]
                }
            },
            layout: {
                'icon-image': `icon`,
                'icon-size': 1.5,
                // 'text-field': '{storeId}',
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 0.9],
                'text-anchor': 'top'
            }
            });
            
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