import React, {Component} from 'react';

import './main.styl'

class FriendList extends Component {
    constructor (props) {
        super(props);
        this.infoList = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
    }
    render () {
        return (
            <div className={'friend-list'}>
                {
                    this.infoList.length ?
                        this.infoList.map((val, index) => {
                            return (
                                <div className={'friend-list-card'}>user card</div>
                            )
                        }):
                        ''
                }
            </div>
        )
    }
}

export default FriendList