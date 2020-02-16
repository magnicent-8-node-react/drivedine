// Types
import { LOCATION_UPDATE } from '../actions/types'

// Mapbox
import mapboxgl from 'mapbox-gl'

// Test Image
import icon from '../pointer.png'

// Set Mapbox Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVkaW5lMiIsImEiOiJjazZsYzRwdmUwZG1lM211OXNlb2JsYnRiIn0.ZDOFdh3cuDMQZt9FPnZ-jw';

export const getTrucks = async function (map) {
    // Fetches Pointers to Map Through All of Them Below
    const res = await fetch('https://drivedineapi.herokuapp.com/api');
    const data = await res.json();

    // Creates Pointer Data to Plot on Map  
    const trucks = data.data.map(truck => {
        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [
                    truck.location.coordinates[0],
                    truck.location.coordinates[1]
                ]
            },
            properties: {
                truckName: truck.truckName,
                icon: 'icon'
            }
        };
    });

    // Gets Data and Inserts to Map
    insertTruckPointers(map, trucks);
}

export const insertTruckPointers = function (map, trucks) {
    // Load Images
    map.loadImage(icon, (error, image) => {
        if (error) throw error;
        map.addImage('icon', image);
    });
    
    // Load Pointers
    map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: trucks
            }
        },
        layout: {
            'icon-image': '{icon}',
            'icon-size': .8,
            'text-field': '{truckName}',
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.9],
            'text-anchor': 'top'
        }
    });
}

// Get Current User Position
export const getLocation = () => (dispatch) => {
    navigator.geolocation.getCurrentPosition((position) => {
        dispatch({
            type: LOCATION_UPDATE,
            payload: position.coords
        })
    });
}

// Centers Map to Given Location
export const jumpTo = (map, long, lat) => {
    map.jumpTo({
        'center': [long, lat],
        'zoom': 14
    });
}

// Adds User Tracking Button on Top Right Map
export const userTracker = (map) => {
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );
}