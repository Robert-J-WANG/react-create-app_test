import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class index extends Component {

    handleAdd = (event) => {
        const { keyCode, target } = event;
        if (keyCode !== 13) return;
        if (target.value.trim() === "") {
            alert('Please enter a valid key')
            return;
        }
        const todoObj = {
            id: nanoid(),
            name: target.value,
            done: false,
        }
        this.props.addTodo(todoObj);
        target.value = "";
    }
    render() {
        return (
            <div>
                <input type="text" placeholder='type the name' onKeyUp={this.handleAdd} />
            </div>
        )
    }
}

