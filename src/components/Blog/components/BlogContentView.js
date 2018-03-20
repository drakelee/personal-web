import React, {Component, Fragment} from 'react'
import BaseService from '../../../services/BaseService'

class BlogContentView extends Component {
    state = {
        blog: {}
    }

    async componentDidMount() {
        let {match} = this.props
        let blog = await BaseService.getBlog(match.params.id)
        this.setState({blog})
    }

    render() {
        let {title, content, created_by} = this.state.blog
        return (
            <Fragment>
                <div>Title:{title}</div>
                <div>By: {created_by}</div>
                <div>Content:{content}</div>
            </Fragment>
        )
    }
}

export default BlogContentView
