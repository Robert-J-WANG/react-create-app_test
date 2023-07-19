import React, { Component } from 'react'

export default class index extends Component {

    // 页面挂载2秒调转到Message页面
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/home/message')
        }
            , 2000)
    }
    render() {
        return (
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        )
    }
}
