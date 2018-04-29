import React, {Component} from 'react'
import TextFieldForm from '../../Form/TextFieldForm'
import Button from '../../Button/Button'
import GuestList from './GuestList'

class CreateGuestList extends Component {
    state = {
        name: '',
        guests: [],
        newGuest: ''
    }

    render() {
        const {name, guests, newGuest} = this.state
        return (
            <div>
                <TextFieldForm
                    name='name'
                    placeholder='Enter name of list.'
                    onChange={this.handleChange}
                    value={name}
                />
                <GuestList guests={guests} onRemoveClick={this.onRemoveGuestClick}/>
                <TextFieldForm
                    name='newGuest'
                    placeholder='Enter name of new guest.'
                    onChange={this.handleChange}
                    onEnter={this.handleNewGuessEnter}
                    value={newGuest}
                />
                <Button
                    text='Add Guest'
                    onClick={this.handleNewGuessEnter}
                />
            </div>
        )
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleNewGuessEnter = () => {
        let {guests, newGuest} = this.state
        if (newGuest) {
            this.setState({
                guests: [...guests, newGuest],
                newGuest: ''
            })
        }
    }

    onRemoveGuestClick = index => {
        let {guests} = this.state
        this.setState({
            guests: [...guests.slice(0, index), ...guests.slice(index + 1, guests.length)]
        })
    }
}

export default CreateGuestList