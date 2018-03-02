import React, {Component} from 'react'

import './main.styl'

class SingleChatCard extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className={'single-chat-card'}>
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

export default SingleChatCard