// Types
import { LOCATION_UPDATE } from '../actions/types'

// Mapbox
import mapboxgl from 'mapbox-gl'

// Test Image
import icon from '../pointerv2.png'
import icon2 from '../upointerv2.png';

// Set Mapbox Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVkaW5lMiIsImEiOiJjazZsYzRwdmUwZG1lM211OXNlb2JsYnRiIn0.ZDOFdh3cuDMQZt9FPnZ-jw';

// Global Variables
let trucks = [];

export const getTrucks = async function (map) {
    // Fetches Pointers to Map Through All of Them Below
    const res = await fetch('https://drivedineapi.herokuapp.com/api');
    const data = await res.json();

    // Creates Pointer Data to Plot on Map  
    trucks = data.data.map(truck => {
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
                icon: 'icon',
                truck: 'none',
            }
        };
    });

    // Load Images
    map.loadImage(icon, (error, image) => {
        if (error) throw error;
        map.addImage('icon', image);
    });

    map.loadImage(icon2, (error, image) => {
        if (error) throw error;
        map.addImage('icon2', image);
    });

    // Add data as source
    map.addSource('trucks', { type: 'geojson', data: {
        type: 'FeatureCollection',
        features: trucks
    }});

    // Gets Data and Inserts to Map
    insertTruckPointers(map, trucks, 'points');
}

export const insertTruckPointers = function (map, trucks, layerId) {
    // Load Pointers
    map.addLayer({
        id: layerId,
        type: 'symbol',
        source: 'trucks',
        layout: {
            'icon-image': '{icon}',
            'icon-size': .07,
            'text-field': '{truckName}',
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.9],
            'text-anchor': 'top',
            'visibility': 'none'
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

export const updatePointer = (map, long, lat) => {
    let pointer = {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [
                long,
                lat
            ]
        },
        properties: {
            truckName: 'You',
            icon: 'icon2',
            truck: 'visible',
        }
    };

    trucks.unshift(pointer);

    // Prevents Error Where User Refreshes Before Map Loads
    if(map.getSource('trucks')){
        map.getSource('trucks').setData({type: "FeatureCollection", features: trucks});
    } else {
        console.log('Wait till map loads/ Map unable to load');
    }
}

// export const filter = (map, value) => {
//     value = value.trim().toLowerCase();
//     layerIDs.forEach(function(layerID) {
//       map.setLayoutProperty(
//       layerID,
//       'visibility',
//       layerID.indexOf(value) > -1 ? 'visible' : 'none'
//       );
//     });
// }