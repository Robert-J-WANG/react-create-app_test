import React, { Component } from 'react'

export default class Footer extends Component {

  handlerCheckedAll = (event) => {
    this.props.checkAllTodos(event.target.checked);
  }

  handlerClearAll = () => {
    this.props.deleteAllCheckedTodos();
  }

  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((pre, todo) =>
      pre + (todo.done ? 1 : 0), 0);
    const total = todos.length;
    return (
      <div>
        <input type="checkbox" checked={(doneCount === total) && (total !== 0) ? true : false} onChange={this.handlerCheckedAll} />
        <span>{doneCount}/{total}</span>
        <button onClick={this.handlerClearAll} >删除所有</button>
      </div>
    )
  }
}
