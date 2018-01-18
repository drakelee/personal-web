import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TextFieldForm extends Component {
    render() {
        let {name, placeholder, value} = this.props
        return (
            <input
                type='text'
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={this.onChange}
            />
        )
    }

    onChange = e => {
        e.preventDefault()
        this.props.onChange(e.target.name, e.target.value)
    }
}

TextFieldForm.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default TextFieldForm
