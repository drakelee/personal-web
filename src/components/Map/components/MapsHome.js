import React, {Component} from 'react'
import MapsView from './MapsView'

class MapsHome extends Component {
    render() {
        return (
            <div>
                <MapsView
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDhEC2r-dJxVETI2ZDSKlA6703C48JHSxg'
                    loadingElement={<div style={styles.loadingElement} />}
                    containerElement={<div style={styles.containerElement} />}
                    mapElement={<div style={styles.mapElement} />}
                />
            </div>
        )
    }
}

const styles = {
    loadingElement: {
        height: '100%'
    },
    containerElement: {
        height: '400px'
    },
    mapElement: {
        height: '100%'
    }
}

export default MapsHome
