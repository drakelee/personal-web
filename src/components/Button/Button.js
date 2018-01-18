import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    render() {
        let {onClick, text} = this.props

        return (
            <button onClick={onClick}>
                {text}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
