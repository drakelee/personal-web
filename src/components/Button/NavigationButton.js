import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class NavigationButton extends Component {
    render() {
        let {text, to} = this.props

        return (
            <Link to={to}>
                <button>
                    {text}
                </button>
            </Link>
        )
    }
}

NavigationButton.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string
}

export default NavigationButton
