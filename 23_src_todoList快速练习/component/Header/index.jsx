import React, { Component } from 'react'

import { nanoid } from 'nanoid';

export default class Header extends Component {
  handlerKeyUp = (event) => {
    const { target, keyCode } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === '') alert('Invalid value');

    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false
    }

    this.props.addTodo(todoObj);
    target.value = "";

  }


  render() {
    return (
      <div>
        <input type="text" placeholder='按Enter键添加ToDo' onKeyUp={this.handlerKeyUp} />
      </div>
    )
  }
}
