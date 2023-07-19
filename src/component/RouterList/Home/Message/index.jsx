import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Detail from './Detail'

export default class Message extends Component {

    state = {
        mArry: [
            { id: '001', title: 'Message001', content: 'this is the message001' },
            { id: '002', title: 'Message002', content: 'this is the message002' },
            { id: '003', title: 'Message003', content: 'this is the message003' },
            { id: '004', title: 'Message004', content: 'this is the message004' },
        ]
    }
    render() {
        const { mArry } = this.state;
        return (
            <div>
                {/* 传递参数之params */}
                {/* {
                    mArry.map(m => (<li>
                        <Link to={`/routerlist/home/message/detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
                    </li>))
                } */}

                {/* 传递参数之search */}
                {/* {
                    mArry.map(m => (<li key={m.id}>
                        <Link to={`/routerlist/home/message/detail/?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>
                    </li>))
                } */}

                {/* 传递参数之state */}
                {
                    mArry.map(m => (<li key={m.id}>
                        <Link to={
                            {
                                pathname: '/routerlist/home/message/detail',
                                state: {
                                    id: m.id,
                                    title: m.title,
                                    content: m.content
                                }
                            }
                        }>{m.title}</Link>
                    </li>))
                }

                <hr />

                {/* 申明接收参数 params */}
                {/* <Route path='/routerlist/home/message/detail/:id/:title/:content' component={Detail} /> */}

                {/* 申明接收参数 search, 无需申明 */}
                {/* <Route path='/routerlist/home/message/detail' component={Detail} /> */}

                {/* 申明接收参数 state, 无需申明 */}
                <Route path='/routerlist/home/message/detail' component={Detail} />
            </div >
        )
    }
}
