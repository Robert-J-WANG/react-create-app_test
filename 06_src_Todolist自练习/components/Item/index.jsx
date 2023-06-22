import React, { Component } from 'react'


export default class index extends Component {
    state = { mouse: false }

    handlerMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }

    }
    handlerDelete = (id) => {

        return () => {
            const { deleteTodo } = this.props
            deleteTodo(id)
        }
    }

    handlerCheck = (id) => {
        return (e) => {
            this.props.updateTodo(id, e.target.checked)
        }
    }

    render() {
        const { mouse } = this.state
        const { id, name, done } = this.props
        return (
            <div>
                <li style={{ backgroundColor: mouse ? "#ddd" : "white" }}
                    onMouseLeave={this.handlerMouse(false)} onMouseEnter={this.handlerMouse(true)}
                >
                    <input type="checkbox" checked={done} onChange={this.handlerCheck(id)} />
                    <span>{name}</span>
                    <button style={{ display: mouse ? 'block' : 'none' }} onClick={this.handlerDelete(id)}>delete</button>
                </li>
            </div >
        )
    }
}

