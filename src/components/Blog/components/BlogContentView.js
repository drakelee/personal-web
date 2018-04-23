import React, {Component} from 'react'
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
            <div style={style.container}>
                <div>{title}</div>
                <div>By: {created_by}</div>
                <div>{content}</div>
            </div>
        )
    }
}

const style = {
    container: {
        backgroundColor: 'white',
        minWidth: 500
    }
}

export default BlogContentView
