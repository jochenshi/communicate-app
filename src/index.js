import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import App from './App'

import './asset/icon/iconfont.css'


ReactDom.render(
    (
        <App/>
    ), document.getElementById('root')
)
