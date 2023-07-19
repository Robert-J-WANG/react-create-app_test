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
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {messageArr.map(msgObj => {
                        return (
                            <li key={msgObj.id}>

                                {/* 向路由组件传递pramas参数 msgObj.id和 msgObj.title*/}
                                {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                                {/* 向路由组件传递search参数 msgObj.id和 msgObj.title*/}
                                <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })}
                </ul>
                <hr />
                {/* 申明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* 接收search参数，不需要申明，正常注册路由即可*/}
                <Route path="/home/message/detail" component={Detail} />
            </div>

        )
    }
}
