import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class BlogGridItem extends Component {
    state = {
        blog: {}
    }

    componentDidMount() {
        let {blog} = this.props
        this.setState({blog})
    }

    render() {
        let {id, title, content} = this.state.blog

        return (
            <div style={style.container}>
                <div style={style.title}>{title}</div>
                <div style={style.content}>{this.trimContent(content)}</div>
                <Link to={`/blogs/${id}`}>Read more</Link>
            </div>
        )
    }

    trimContent(content) {
        return content && content.length >= 200 ? `${content.substring(0, 200)}...` : content
    }
}

const style = {
    container: {
        minWidth: 300,
        maxWidth: 400,
        padding: 15,
        backgroundColor: 'white'
    },
    title: {
        marginBottom: 15,
        fontSize: 24
    }
}

export default BlogGridItem
