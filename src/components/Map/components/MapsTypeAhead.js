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
                const places = refs.searchBox.getPlaces()
                this.setState({places})
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
