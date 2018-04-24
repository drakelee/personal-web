import React, {Component} from 'react'
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps'

class MapsView extends Component {
    state = {
        markers: []
    }

    render() {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{lat: -34.397, lng: 150.644}}
                onRightClick={this.handleRightClick}
            >
                {this.renderMarkers()}
            </GoogleMap>
        )
    }

    renderMarkers() {
        let {markers} = this.state
        return markers.map((marker, index) => {
            return <Marker
                key={index}
                position={{lat: marker.lat, lng: marker.lng}}
            />
        })
    }

    handleRightClick = e => {
        this.setMarker(e.latLng.lat(), e.latLng.lng())
    }

    setMarker(lat, lng) {
        let {markers} = this.state
        this.setState({
            markers: [...markers, {lat, lng}]
        })
    }
}

export default withScriptjs(withGoogleMap(MapsView))
