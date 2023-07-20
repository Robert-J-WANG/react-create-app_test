import React, { Component } from 'react'
// import QueryString from 'query-string'

export default class Detail extends Component {

    goAbout = () => {
        this.props.history.push('/routerlist/about',)
    }

    goTodolist = () => {
        this.props.history.push('/todolist',)
    }

    render() {
        //  接收参数 params
        // const { id, title, content } = this.props.match.params

        //  接收参数 search,（需要下载'query-string'库）
        // const { id, title, content } = QueryString.parse(this.props.location.search)

        //  接收参数 state, || {} 防止首次加载页面时空指针异常
        const { id, title, content } = this.props.location.state || {};
        return (
            <div>
                <ul>
                    <li>{id}</li>
                    <li>{title}</li>
                    <li>{content}</li>
                </ul>
                <div>
                    {/* 编程式路由导航 */}
                    <button onClick={this.goAbout}>about</button>&nbsp;&nbsp;
                    <button onClick={this.goTodolist}>todolist</button>
                </div>
            </div>

        )
    }
}
