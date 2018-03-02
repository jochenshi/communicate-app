import React, {Component} from 'react';
import SingleChatComponent from "./single-chat";

import './chat.styl'
import SingleChatCard from "../../component/single-chat-card/main";

class ChatComponent extends Component {
    constructor (props) {
        super(props);
        console.log('11',props);
        this.chatList = [{},{},{},{},{},{}];
    }
    render () {
        return (
            <div className={'chat-component-wrapper'}>
                <div className={'chat-left-content'}>
                    {
                        this.chatList.length ?
                            this.chatList.map((val, index) => {
                                return <SingleChatCard key={index} chatInfo={val}/>
                            }):
                            <div>no content</div>
                    }
                </div>
                <SingleChatComponent/>
            </div>
        )
    }
}

export default ChatComponent