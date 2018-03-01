import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import './index.styl'

import MainHome from './module/main/main'

const Index = React.createClass({
    render() {
        console.log(this.props.location)
        return (
            <h3>Index</h3>
        )
    }
})

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={'/auth/main'} component={MainHome}/>
                    <Route path={'/login'}/>
                    <Redirect to={'/auth/main'}/>
                </Switch>
            </Router>
        )
    }
}

export default App