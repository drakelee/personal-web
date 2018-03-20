import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'
import MenuBar from '../Menu/MenuBar'
import BlogContainer from '../Blog/components/BlogContainer'

class MainLayout extends Component {
    render() {
        return (
            <Fragment>
                <MenuBar/>
                <div>
                    <Route path='/blogs' component={BlogContainer}/>
                </div>
            </Fragment>
        )
    }
}

export default MainLayout
