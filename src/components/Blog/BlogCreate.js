import React, {Component, Fragment} from 'react'
import TextFieldForm from '../Form/TextFieldForm'

class BlogCreate extends Component {
    state = {
        title: '',
        content: ''
    }

    render() {
        let {content, title} = this.state

        return (
            <Fragment>
                <form>
                    <TextFieldForm
                        name='title'
                        placeholder='Enter title'
                        onChange={this.onChange}
                        value={title}
                    />
                    <TextFieldForm
                        name='content'
                        placeholder='Enter content'
                        onChange={this.onChange}
                        value={content}
                    />
                    <button onClick={this.onClick}>
                        Submit
                    </button>
                </form>
            </Fragment>
        )
    }

    onChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    onClick = e => {
        e.preventDefault()
        alert('create')
    }
}

export default BlogCreate
