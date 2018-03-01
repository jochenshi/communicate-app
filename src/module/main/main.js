import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'

import LeftNav from '../../component/left-nav/main'
import ChatComponent from '../chat/chat'
import FriendsComponent from '../friends/main'
import MoreComponent from "../more/main";

import './main.styl'

class MainHome extends Component {
    constructor (props) {
        super(props);
        this.titles = [
            {icon: 'ca-chat01', key: 'chat-content', path: '/auth/main/chat/', titleText: '会话'},
            {icon: 'ca-person', key: 'friend-content', path: '/auth/main/friends/', titleText: '好友'},
            {icon: 'ca-more', key: 'more-content', path: '/auth/main/more/', titleText: '更多'}
        ]
    }
    render () {
        return (
            <div className={'root-content'}>
                <LeftNav titles={this.titles} parentProps={this.props}/>
                <div className={'right-main-content'}>
                    <Switch>
                        <Route path={`${this.props.match.path}/chat`} component={ChatComponent}/>
                        <Route path={`${this.props.match.path}/friends`} component={FriendsComponent}/>
                        <Route path={`${this.props.match.path}/more`} component={MoreComponent}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default MainHome