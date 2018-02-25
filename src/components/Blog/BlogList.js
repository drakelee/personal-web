import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BaseService from '../../services/BaseService'

class BlogList extends Component {
    state = {
        blogs: []
    }

    async componentDidMount() {
        let blogs = await BaseService.getBlogs()
        this.setState({
            blogs
        })
    }

    render() {
        return (
            <div>
                {this.renderBlogs()}
            </div>
        )
    }

    renderBlogs() {
        let {blogs} = this.state

        return blogs.map((blog, key) => {
            return (
                <div key={key}>
                    <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </div>
            )
        })
    }
}

export default BlogList
