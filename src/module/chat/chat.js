import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

import SingleChatComponent from "./single-chat";
import SingleChatCard from "../../component/single-chat-card/main";

import './chat.styl'

class ChatComponent extends Component {
    constructor (props) {
        super(props);
        this.chatList = [{},{},{},{},{},{}];
    }
    render () {
        return (
            <div className={'chat-component-wrapper'}>
                <div className={'chat-left-content'}>
                    {
                        this.chatList.length ?
                            this.chatList.map((val, index) => {
                                return (
                                    <SingleChatCard key={index} chatInfo={val} clickEvent={() => {
                                        this.props.history.push('/auth/main/chat/' + index)
                                    }} chatId={index}/>
                                )
                            }):
                            <div>no content</div>
                    }
                </div>
                <Switch>
                    <Route path={`${this.props.match.path}/:id`} component={SingleChatComponent}/>
                </Switch>
            </div>
        )
    }
}

export default ChatComponent