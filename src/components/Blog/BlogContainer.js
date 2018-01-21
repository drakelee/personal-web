import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'
import BlogCreate from './BlogCreate'
import BlogContentView from './BlogContentView'
import NavigationButton from '../Button/NavigationButton'

class BlogContainer extends Component {
    render() {
        return (
            <Fragment>
                <Route
                    // path='/blog/:year/:month/:day/:title'
                    path={'/blogs/:id'}
                    component={BlogContentView}
                />
                <Route
                    path='/blogs/create'
                    component={BlogCreate}
                />
                <NavigationButton to='/blog/create' text='Create'/>
            </Fragment>
        )
    }
}

export default BlogContainer
