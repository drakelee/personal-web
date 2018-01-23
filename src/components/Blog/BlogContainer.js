import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import BlogCreate from './BlogCreate'
import BlogContentView from './BlogContentView'
import NavigationButton from '../Button/NavigationButton'

class BlogContainer extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route
                        exact
                        path='/blogs/create'
                        component={BlogCreate}
                    />
                    <Route
                        // path='/blog/:year/:month/:day/:title'
                        path={'/blogs/:id'}
                        component={BlogContentView}
                    />
                </Switch>
                <NavigationButton to='/blogs/create' text='Create'/>
            </Fragment>
        )
    }
}

export default BlogContainer
