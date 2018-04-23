import React, {Component} from 'react'
import MenuItem from './MenuItem'

class MenuBar extends Component {
    render() {
        return (
            <div style={styles.container}>
                <MenuItem anchorStyle={styles.menuItem} to='/home' title='Home'/>
                <MenuItem anchorStyle={styles.menuItem} to='/blogs' title='Blog'/>
                <MenuItem anchorStyle={styles.menuItem} to='/maps' title='Maps'/>
            </div>
        )
    }
}

const styles = {
    container: {
        height: '40px',
        paddingTop: '20px',
        backgroundColor: '#03A9F4'
    },
    menuItem: {
        marginLeft: 30,
        marginRight: 30,
        fontWeight: 'bold',
        color: '#E1F5FE',
        textDecoration: 'none'
    }
}

export default MenuBar
