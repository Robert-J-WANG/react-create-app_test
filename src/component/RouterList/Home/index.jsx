import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to='/routerlist/home/news'>News</NavLink>
                    </li>
                    <li>
                        <NavLink to='/routerlist/home/message'>Message</NavLink>
                    </li>
                </ul>
                <hr />
                <Route path='/routerlist/home/news' component={News} />
                <Route path='/routerlist/home/message' component={Message} />
            </div>
        )
    }
}
