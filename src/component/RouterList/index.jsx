import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyNavLink from '../MyNavLink'

import About from './About'
import Home from './Home'

export default class RouterList extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink to='/routerlist/about'>About</MyNavLink>
                            <MyNavLink to='/routerlist/home'>Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path='/routerlist/about' component={About} />
                                <Route path='/routerlist/home' component={Home} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
