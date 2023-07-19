import React, { Component } from 'react'
//  npm i --save-dev query-string   
import QueryString from 'query-string'



const detailData = [
    { id: '001', content: 'hello' },
    { id: '002', content: 'react' },
    { id: '003', content: 'world' },
]

export default class index extends Component {

    render() {
        console.log(this.props)

        // 获取params参数
        // const { id, title } = this.props.match.params
        // const findResult = detailData.find(dataObj =>
        //     dataObj.id === id
        // )

        // 获取search参数
        const { search } = this.props.location
        console.log(search)
        const { id, title } = QueryString.parse(search)
        const findResult = detailData.find(dataObj =>
            dataObj.id === id
        )

        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
