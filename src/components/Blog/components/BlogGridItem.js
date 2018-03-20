import React, {Component} from 'react'

class BlogGridItem extends Component {
    state = {
        blog: {}
    }

    componentDidMount() {
        let {blog} = this.props
        this.setState({blog})
    }

    render() {
        let {title, content} = this.state.blog

        return (
            <div style={style.container}>
                <div style={style.title}>{title}</div>
                <div style={style.content}>{content}</div>
            </div>
        )
    }
}

const style = {
    container: {
        minHeight: 300,
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
