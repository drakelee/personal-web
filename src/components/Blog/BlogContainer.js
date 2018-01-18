import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'
import BlogCreate from './BlogCreate'
import BlogContentView from './BlogContentView'
import NavigationButton from '../Button/NavigationButton'

class BlogContainer extends Component {
    render() {
        return (
            <Fragment>
                <div>BlogContainer</div>
                <Route
                    path='/blog/:year/:month/:day/:title'
                    component={BlogContentView}
                />
                <Route
                    path='/blog/create'
                    component={BlogCreate}
                />
                <NavigationButton to='/blog/create' text='Create'/>
            </Fragment>
        )
    }
}

export default BlogContainer
