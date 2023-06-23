import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class index extends Component {
    render() {
        console.log('mynavlink', this.props)
        return (
            <NavLink activeClassName='atguigu' className="list-group-item " {...this.props} />
        )
    }
}
