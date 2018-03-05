import React, {Component} from 'react'
import PropTypes from 'prop-types';

import './main.styl'
import LeftNav from "../left-nav/main";

class SingleChatCard extends Component {
    constructor (props) {
        super(props);
        //console.log('singlechat', this)
    }

    render () {
        return (
            <div className={'single-chat-card'} onClick={() => {
                this.props.clickEvent();
                console.log('asd', this);
                //this.context.router.history.push('/auth/main/chat/' + this.props.chatId)
            }}>
                <div className={'person-avatar'}>
                    <i className={'avatar-area'}></i>
                </div>
                <div className={'single-card-content'}>
                    <div className={'nick-time'}>
                        <span className={'nick-name'}>tom</span>
                        <span className={'latest-time'}>2018-03-02</span>
                    </div>
                    <div className={'last-chat'}>xxxxxx</div>
                </div>
            </div>
        )
    }
}

SingleChatCard.contextTypes = {
    router: PropTypes.object
};

export default SingleChatCard