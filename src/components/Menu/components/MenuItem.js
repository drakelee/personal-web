import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class MenuItem extends Component {
    render() {
        let {title, to, anchorStyle} = this.props

        return (
            <NavLink style={anchorStyle} to={to}>
                {title}
            </NavLink>
        )
    }
}

export default MenuItem
