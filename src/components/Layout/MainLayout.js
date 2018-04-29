import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'
import MenuBar from '../Menu/components/MenuBar'
import BlogContainer from '../Blog/components/BlogContainer'
import MapsHome from '../Map/components/MapsHome'
import GuestLists from '../GuestList/components/GuestLists'
import CreateGuestList from '../GuestList/components/CreateGuestList'

class MainLayout extends Component {
    render() {
        return (
            <Fragment>
                <MenuBar/>
                <div>
                    <Route path='/blogs' component={BlogContainer}/>
                    <Route path='/maps' component={MapsHome}/>
                    <Route exact path='/guestList' component={GuestLists}/>
                    <Route exact path='/guestList/create' component={CreateGuestList}/>
                </div>
            </Fragment>
        )
    }
}

export default MainLayout
