import React, { Component } from 'react'

export default class index extends Component {
    render() {
        console.log('header', this.props)
        return (
            <div className="page-header"><h2>React Router Demo</h2></div>
        )
    }
}
