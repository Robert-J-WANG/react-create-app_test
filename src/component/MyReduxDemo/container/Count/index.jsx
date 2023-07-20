import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'

export default class Count extends Component {

    // componentDidMount() {
    //     // 检查redux中状态的变化，只要变化，就调用rendern
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    increment = () => {
        const { value } = this.countValue;
        store.dispatch(createIncrementAction(value * 1))
    }
    decrement = () => {
        const { value } = this.countValue;
        store.dispatch(createDecrementAction(value * 1))

    }
    incrementIfOdd = () => {
        const { value } = this.countValue;
        if (store.getState().he % 2 !== 0)
            store.dispatch(createIncrementAction(value * 1))

    }
    incrementAsynac = () => {
        console.log(store.getState())
        const { value } = this.countValue;
        store.dispatch(createIncrementAsyncAction(value * 1, 500))
    }

    render() {
        // console.log(store.getState())

        return (
            <div>
                <h2>这是一个Count组件</h2>
                <h3>当前求和为{store.getState().he}</h3>
                <hr />
                <select ref={(currentNode) => { this.countValue = currentNode }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>奇数时加</button>
                <button onClick={this.incrementAsynac}>异步加</button>

            </div >
        )
    }
}
