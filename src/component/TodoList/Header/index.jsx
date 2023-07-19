import React, { Component } from 'react'
import { nanoid } from 'nanoid';

export default class Header extends Component {

    handlerAdd = (event) => {
        const { target, keyCode } = event;
        const todoObj = {
            id: nanoid(),
            name: target.value,
            done: false
        }
        if (target.value.trim() === '') alert('Please enter a valid value');
        if (keyCode !== 13) return;
        this.props.addTodo(todoObj);
        target.value = "";
    }
    render() {
        return (
            <div>
                <input type="text" placeholder='输入内容，按enter键添加' onKeyUp={this.handlerAdd} />
            </div>
        )
    }
}
