import React, {Component} from 'react'

class GuestListItem extends Component {
    render() {
        let {name} = this.props
        return (
            <div>
                <span>
                    {name}
                </span>
                <span onClick={this.handleRemoveClick}>X</span>
            </div>
        )
    }

    handleRemoveClick = () => {
        let {onRemoveClick, index} = this.props
        onRemoveClick && onRemoveClick(index)
    }

}

export default GuestListItem