import React, {Component} from 'react'

import './main.styl'

class SingleChatItem extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className={`single-item ${this.props.itemInfo.source === 'target' ? 'target-item' : 'local-item'}`}>
                <div className={'single-item-avatar'}>
                    <i></i>
                </div>
                <div className={'single-item-content'}>
                    hello, this is text,this is text for test
                </div>
            </div>
        )
    }
}

export default SingleChatItem