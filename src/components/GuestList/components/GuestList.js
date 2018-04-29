import React, {Component} from 'react'
import GuestListItem from './GuestListItem'

class GuestList extends Component {
    render() {
        return (
            <div>
                {this.guests}
            </div>
        )
    }

    get guests() {
        const {guests} = this.props
        return guests.map((guest, index) => {
            return (
                <GuestListItem
                    key={index}
                    index={index}
                    name={guest}
                    onRemoveClick={this.onRemoveClick}/>
            )
        })
    }

    onRemoveClick = index => {
        const {onRemoveClick} = this.props
        onRemoveClick && onRemoveClick(index)
    }
}

export default GuestList