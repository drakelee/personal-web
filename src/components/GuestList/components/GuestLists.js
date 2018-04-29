import React, {Component} from 'react'
import NavigationButton from '../../Button/NavigationButton'

class GuestLists extends Component {
    render() {
        return (
            <div>
                <NavigationButton text='Create New List' to='/guestList/create'/>
            </div>
        )
    }
}

export default GuestLists