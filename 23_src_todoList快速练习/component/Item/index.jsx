import React, { Component } from 'react'

export default class Item extends Component {

  // 初始化Item自身组件的状态
  state = { mouse: false }

  // 处理鼠标移入背景高亮并显示出删除按钮
  handlerMouse = (mouse) => {
    return () => {
      this.setState({ mouse });
    }
  }

  // 删除ToDo
  handlerDelete = (id) => {
    return () => {
      if (window.confirm("Are you sure you want to delete")) {
        this.props.deleteTodo(id)
      }
    }
  }

  // checkbox change
  handlerChecked = (id) => {
    return (event) => {
      this.props.updateChecked(id, event.target.checked);
    };
  }

  render() {

    const { id, name, done } = this.props;
    const { mouse } = this.state;

    return (
      <li style={{ backgroundColor: mouse ? "#ddd" : "white" }} onMouseEnter={this.handlerMouse(true)} onMouseLeave={this.handlerMouse(false)}>
        <input type="checkbox" checked={done} onChange={this.handlerChecked(id)} />
        <span>{name}</span>
        <button style={{ display: mouse ? "block" : "none" }} onClick={this.handlerDelete(id)}>删除</button>
      </li>
    )
  }
}
