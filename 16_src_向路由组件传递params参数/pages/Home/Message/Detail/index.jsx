import React, { Component } from 'react'


const detailData = [
    { id: '001', content: 'hello' },
    { id: '002', content: 'react' },
    { id: '003', content: 'world' },
]

export default class index extends Component {

    render() {
        console.log(this.props)
        const { id, title } = this.props.match.params
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
