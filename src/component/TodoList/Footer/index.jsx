import React, { Component } from 'react'

export default class Footer extends Component {

    handlerAllChecked = (event) => {
        this.props.updateAllChecked(event.target.checked);
    }

    handlerDeleteAll = () => {
        this.props.deleteAllChecked();
    }

    render() {
        const { todos } = this.props;
        const doneCount = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0);
        }, 0);
        const total = todos.length;

        return (
            <div>
                <input type="checkbox" checked={(doneCount === total) && (total !== 0) ? true : false} onChange={this.handlerAllChecked} />
                <span>{doneCount}/{total}</span>
                <button onClick={this.handlerDeleteAll}>deleteAll</button>
            </div>
        )
    }
}
