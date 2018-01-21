import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class MenuBar extends Component {
    render() {
        return (
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/blogs'>Blog</Link>
            </div>
        )
    }
}

export default MenuBar
