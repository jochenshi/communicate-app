import React, {Component} from 'react';
import SingleChatComponent from "./single-chat";

import './chat.styl'

class ChatComponent extends Component {
    constructor (props) {
        super(props);
        console.log('11',props)
    }
    render () {
        return (
            <div className={'chat-component-wrapper'}>
                <div className={'chat-left-content'}>
                    chat left content
                </div>
                <SingleChatComponent/>
            </div>
        )
    }
}

export default ChatComponent