import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class index extends Component {

    state = {
        messageArr: [
            { id: '001', title: 'message001' },
            { id: '002', title: 'message002' },
            { id: '003', title: 'message003' }
        ],
    }

    replaceShow = (id, title) => {
        // 编程式路由跳转，使用props.history对象身上的API，而不是采用Link组件
        // 编写一段代码，让其跳转到detail组件，且为replace跳转

        // 1. 传递params参数的方式实现replace跳转
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // 2. 传递search参数的方式实现replace跳转
        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

        // 3. 传递state参数的方式实现replace跳转
        this.props.history.replace('/home/message/detail', { id, title })
    }

    pushShow = (id, title) => {

        // 1. 传递params参数的方式实现push跳转
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // 2. 传递search参数的方式实现push跳转
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

        // 3. 传递state参数的方式实现push跳转
        this.props.history.push('/home/message/detail', { id, title })
    }

    back = () => {
        this.props.history.goBack();
    }
    forward = () => {
        this.props.history.goForward();
    }
    go = () => {
        this.props.history.go(2);
    }

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {messageArr.map(msgObj => {
                        return (
                            <li key={msgObj.id}>

                                {/* 1. 向路由组件传递pramas参数 msgObj.id和 msgObj.title*/}
                                {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp; */}

                                {/* 2. 向路由组件传递search参数 msgObj.id和 msgObj.title*/}
                                {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                                {/* 3. 向路由组件传递state参数 msgObj.id和 msgObj.title*/}
                                <Link to={
                                    {
                                        pathname: '/home/message/detail',
                                        state: { id: msgObj.id, title: msgObj.title }
                                    }
                                }>{msgObj.title}</Link>&nbsp;&nbsp;

                                <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push查看</button>
                                <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replace查看</button>
                            </li>
                        )
                    })}
                </ul>

                <hr />

                {/* 1. 申明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* 2. 接收search参数，不需要申明，正常注册路由即可*/}
                {/* <Route path="/home/message/detail" component={Detail} /> */}

                {/* 3. 接收state参数，不需要申明，正常注册路由即可*/}
                <Route path="/home/message/detail" component={Detail} />

                <hr />
                <button className='btn-primary' onClick={this.back}>后退</button> &nbsp;&nbsp;
                <button className='btn-success' onClick={this.forward}>前进</button>&nbsp;&nbsp;
                <button className='btn-danger' onClick={this.go}>GO</button>

            </div>

        )
    }
}
