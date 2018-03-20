import React, {Component} from 'react'

class BlogGrid extends Component {
    render() {
        return (
            <div style={style.container}>
                {this.props.children}
            </div>
        )
    }
}

const style = {
    container: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        padding: 15
    }
}

export default BlogGrid
