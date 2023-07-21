import React, { Component } from 'react'
import store from '../../redux/store'
import { connect } from "react-redux";
import { increment, decrement, incrementAsync } from '../../redux/actions/count'




class Count extends Component {

    // componentDidMount() {
    //     // 检查redux中状态的变化，只要变化，就调用rendern
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    increment = () => {
        const { value } = this.countValue;
        this.props.increment(value * 1)
    }
    decrement = () => {
        const { value } = this.countValue;
        this.props.decrement(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.countValue;
        if (store.getState().count % 2 !== 0)
            this.props.increment(value * 1)

    }
    incrementAsync = () => {
        console.log(store.getState())
        const { value } = this.countValue;
        this.props.incrementAsync(value * 1, 500)
    }

    render() {
        const { count, persons } = this.props;
        return (
            <div>
                <h2>这是一个Count组件</h2>
                <h3>当前求和为{count},   下面组件总共有{persons.length}人</h3>
                <hr />
                <select ref={(currentNode) => { this.countValue = currentNode }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>奇数时加</button>
                <button onClick={this.incrementAsync}>异步加</button>

            </div >
        )
    }
}


// 创建用于传递状态给UI组件的函数，返回值是一个对象
// const a = data => ({ count: data.count, persons: data.persons })

// 创建用于传递操作状态方法的函数，返回值是一个对象
// const b = (dispatch) => {
//     return {
//         increment: value => dispatch(increment(value)),
//         decrement: value => dispatch(decrement(value)),
//         incrementAsync: (value, time) => dispatch(incrementAsync(value, time))
//     }
// }

export default connect(
    data => ({ count: data.count, persons: data.persons }),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count);