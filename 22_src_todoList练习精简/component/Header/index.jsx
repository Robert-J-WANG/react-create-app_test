import React, { Component } from 'react'

import { nanoid } from 'nanoid';

export default class Header extends Component {

  handlerKeyUp = (event) => {
    const { target, keyCode } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === '') alert('Please enter a valid value');

    // 准备一个新的todoObj容器，用于传递数据
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.addTodos(todoObj);
    target.value = '';
  };
  render() {
    return (
      <div>
        <input type="text" placeholder='按Enter键添加ToDo' onKeyUp={this.handlerKeyUp} />
      </div>
    )
  }
}
