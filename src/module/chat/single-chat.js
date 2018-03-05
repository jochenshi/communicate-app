import React, {Component} from 'react';

import './single-chat.styl'
import SingleChatItem from "../../component/single-chat-item/main";

class SingleChatComponent extends Component {
    constructor (props) {
        super(props);
        console.log('single chat',props);
        this.chatInfo = [
            {source: 'target'},
            {source: 'target'},
            {source: 'source'},
            {source: 'target'},
            {source: 'source'},
            {source: 'source'},
            {source: 'source'},
            {source: 'source'},
            {source: 'source'},
            {source: 'source'},
            {source: 'source'}

        ]
    }
    componentDidMount () {
        console.log('componentDidMount')
    }
    render () {
        console.log('render', this);
        return (
            <div className={'single-chat-component'}>
                <div className={'single-chat-header'}>
                    <div className={'left-header'}>
                        {`tom${this.props.match.params.id}`}
                    </div>
                    <div className={'right-header'}>
                        <i className={'icon iconfont ca-geren'}></i>
                    </div>
                </div>
                <div className={'single-chat-content'}>
                    {
                        this.chatInfo.length ?
                            this.chatInfo.map((val, index) => {
                                return (
                                    <SingleChatItem key={index} itemInfo={val}/>
                                )
                            }):
                            ''
                    }
                </div>
                <div className={'single-chat-input'}>
                    <textarea name="" id=""></textarea>
                    {/*<div className={'edit-content'} contentEditable={'plaintext-only'}></div>*/}
                </div>
            </div>
        )
    }
}

export default SingleChatComponent