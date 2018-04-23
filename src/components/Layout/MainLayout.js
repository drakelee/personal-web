import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'
import MenuBar from '../Menu/MenuBar'
import BlogContainer from '../Blog/components/BlogContainer'
import MapsHome from '../Map/components/MapsHome'

class MainLayout extends Component {
    render() {
        return (
            <Fragment>
                <MenuBar/>
                <div>
                    <Route path='/blogs' component={BlogContainer}/>
                    <Route path='/maps' component={MapsHome}/>
                </div>
            </Fragment>
        )
    }
}

export default MainLayout
