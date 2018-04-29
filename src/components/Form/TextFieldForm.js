import React, {Component} from 'react'
import PropTypes from 'prop-types'

const ENTER_KEY = 13

class TextFieldForm extends Component {
    render() {
        let {name, placeholder, value} = this.props
        return (
            <input
                type='text'
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
            />
        )
    }

    handleChange = e => {
        e.preventDefault()
        let {onChange} = this.props
        onChange && onChange(e.target.name, e.target.value)
    }

    handleKeyDown = e => {
        let {onEnter} = this.props
        if (e.keyCode === ENTER_KEY) {
            e.preventDefault()
            onEnter && onEnter()
        }
    }
}

TextFieldForm.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default TextFieldForm
