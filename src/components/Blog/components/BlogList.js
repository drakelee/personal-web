import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BaseService from '../../../services/BaseService'
import BlogGrid from './BlogGrid'
import BlogGridItem from './BlogGridItem'

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
            <BlogGrid>
                {this.renderBlogGridItems()}
            </BlogGrid>
        )
    }

    renderBlogGridItems() {
        let {blogs} = this.state

        return blogs.map((blog, key) => {
            return <BlogGridItem blog={blog} key={key}/>
        })
    }
}

export default BlogList
