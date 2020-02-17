// Native Imports
import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'

// Actions
import { getTrucks, getLocation, jumpTo, updatePointer } from '../../../actions/location'

// CSS
import styles from './map.module.css'

// Mapbox
import mapboxgl from 'mapbox-gl'

// Set Mapbox Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVkaW5lMiIsImEiOiJjazZsYzRwdmUwZG1lM211OXNlb2JsYnRiIn0.ZDOFdh3cuDMQZt9FPnZ-jw';

class Map extends Component {
  componentDidMount () {
    this.props.getLocation();
    this.renderMap();
  }

  renderMap = () => {
    let { long, lat } = this.props.auth.location;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [long, lat],
      zoom: 14
    })
    
    // Sets map to Component State for Reference
    this.setState({map})

    // Render map Data
    getTrucks(map);

    // Removes All Map Options
    this.mapContainer.removeChild(this.mapContainer.childNodes[2])
  }

  reloadLocation = () => {
    let { lat, long } = this.props.auth.location;
    jumpTo(this.state.map, long, lat);

    updatePointer(this.state.map, long, lat);
  }

  filter = (input) => {
    let {value, name} = input.target;
    this.setState({[name]: value});
    
  }

  render() {
    return (
        <div className={`d-flex justify-content-center ${styles.map_wrap}`}>
          <div ref={el => this.mapContainer = el } className={`mapContainer ${styles.map_container}`}/>

          <button className={`${styles.reload_btn}`} onClick={this.reloadLocation}>Refresh Location</button>
          <div className={styles.filter_wrap}>
            <input onChange={this.filter} id="filter-input" type="text" name="filter" placeholder="Filter by name"/>
          </div>        
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { getLocation })(Map)