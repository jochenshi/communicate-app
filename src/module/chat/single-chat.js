import React, {Component} from 'react';

import './single-chat.styl'

class SingleChatComponent extends Component {
    constructor (props) {
        super(props);
        console.log('11',props)
    }
    render () {
        return (
            <div className={'single-chat-component'}>single chat component</div>
        )
    }
}

export default SingleChatComponent