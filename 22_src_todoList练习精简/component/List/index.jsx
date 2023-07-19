import React, { Component } from 'react'

import Item from '../Item'

export default class List extends Component {

  render() {
    const { todos, deleteTodos, updateTodos } = this.props;
    return (
      <ul>
        {
          todos.map(todo =>
            <Item key={todo.id} {...todo} deleteTodos={deleteTodos} updateTodos={updateTodos} />
          )
        }
      </ul>
    )
  }
}
