import React, { Component } from 'react'
import Count from './container/Count';
import Person from './container/Person';

export default class ReduxDemo extends Component {

    // componentDidMount() {
    //     // 检查redux中状态的变化，只要变化，就调用render
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }
    render() {
        return (
            <div>
                <Count />
                <hr />
                <hr />
                <Person />
            </div>
        )
    }
}


