
import React, { Component } from 'react'

export default class index extends Component {

    handlerCheckAll = (event) => {
        this.props.checkAllTodos(event.target.checked)
    }
    handlerClearAll = () => {
        this.props.clearAllDone();
    }
    render() {
        const { todos } = this.props
        const doneCount = todos.reduce((pre, todo) =>
            pre + (todo.done ? 1 : 0), 0);

        const total = todos.length;

        return (
            <div>
                <input type="checkbox" checked={(doneCount === total) && (total !== 0) ? true : false} onChange={this.handlerCheckAll} />
                <span>{doneCount} / all {total}</span>
                <button type="button" onClick={this.handlerClearAll}>delete all done</button>
            </div>
        )
    }
}
