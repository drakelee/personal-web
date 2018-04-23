import React, {Component} from 'react'
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps'

class MapsView extends Component {
    render() {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{lat: -34.397, lng: 150.644}}
            >
                <Marker
                    position={{lat: -34.397, lng: 150.644}}
                />
            </GoogleMap>
        )
    }
}

export default withScriptjs(withGoogleMap(MapsView))
