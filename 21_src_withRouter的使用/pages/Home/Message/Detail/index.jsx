import React, { Component } from 'react'
//  npm i --save-dev query-string   
// import QueryString from 'query-string'



const detailData = [
    { id: '001', content: 'hello' },
    { id: '002', content: 'react' },
    { id: '003', content: 'world' },
]

export default class index extends Component {

    render() {
        console.log(this.props)

        // 1. 获取params参数
        // const { id, title } = this.props.match.params

        // 2.  获取search参数
        // const { search } = this.props.location
        // console.log(search)
        // const { id, title } = QueryString.parse(search)

        // 3.  获取state参数
        const { state } = this.props.location || {}; // || {}防止清空缓存时报错
        const { id, title } = state

        const findResult = detailData.find(dataObj =>
            dataObj.id === id
        ) || {}; // || {}防止清空缓存时报错

        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>

            </ul>
        )
    }
}
