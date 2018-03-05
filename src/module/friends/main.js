import React, {Component} from 'react';

import FriendList from '../../component/friend-list/main'

import './main.styl'

class FriendsComponent extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className={'friends-content'}>
                <FriendList/>

            </div>
        )
    }
}

export default FriendsComponent