import React, {Component} from 'react'
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox'

class MapsTypeAhead extends Component {
    state = {
        places: [],
        handleSearchBoxMounted: () => {},
        handlePlacesChanged: () => {}
    }
    componentDidMount() {
        const refs = {}

        this.setState({
            places: [],
            handleSearchBoxMounted: ref => {
                refs.searchBox = ref
            },
            handlePlacesChanged: () => {
                let {onSearch} = this.props
                const places = refs.searchBox.getPlaces()
                this.setState({places})
                let searchedPlace = places[0]
                let lat = searchedPlace.geometry.location.lat()
                let lng = searchedPlace.geometry.location.lng()
                onSearch && onSearch(lat, lng)
            }
        })
    }

    render() {
        let {handleSearchBoxMounted, handlePlacesChanged} = this.state
        return (
            <div>
                <StandaloneSearchBox
                    ref={handleSearchBoxMounted}
                    onPlacesChanged={handlePlacesChanged}
                >
                    <input
                        type='text'
                        placeholder='Enter a city'
                    />
                </StandaloneSearchBox>
            </div>
        )
    }
}

export default MapsTypeAhead
