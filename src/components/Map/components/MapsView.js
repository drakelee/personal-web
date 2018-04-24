import React, {Component} from 'react'
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps'
import MapsTypeAhead from './MapsTypeAhead'

class MapsView extends Component {
    state = {
        markers: [],
        defaultCenter: {lat: -34.397, lng: 150.644}
    }

    render() {
        return (
            <div>
                <GoogleMap
                    defaultZoom={8}
                    center={this.getCenter()}
                    onRightClick={this.handleRightClick}
                >
                    {this.renderMarkers()}
                </GoogleMap>
                <MapsTypeAhead
                    onSearch={this.handlePlaceMarker}
                />
            </div>
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

    handlePlaceMarker = (lat, lng) => {
        this.setMarker(lat, lng)
    }

    getCenter = () => {
        let {defaultCenter, markers} = this.state
        if (markers.length) {
            return markers[markers.length-1]
        } else {
            return defaultCenter
        }
    }

    setMarker(lat, lng) {
        let {markers} = this.state
        this.setState({
            markers: [...markers, {lat, lng}]
        })
    }
}

export default withScriptjs(withGoogleMap(MapsView))
