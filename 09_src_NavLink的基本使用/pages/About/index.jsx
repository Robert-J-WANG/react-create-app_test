import React, { Component } from 'react'

export default class index extends Component {
    render() {
        console.log('About', this.props)
        return (
            <h3>我是About的内容</h3>
        )
    }
}
