import React, { Component } from 'react'

export default class Item extends Component {

    state = {
        mouse: false
    }

    handlerMouse = (mouse) => {
        return () => {
            this.setState({ mouse });
        }
    }

    handlerDelete = (id) => {
        return () => {
            this.props.deleteTodo(id);
        }
    }

    handlerChecked = (id) => {
        return (event) => {
            this.props.updateChecked(id, event.target.checked);
        }
    }

    render() {
        const { id, name, done } = this.props;
        const { mouse } = this.state;
        return (

            <li onMouseEnter={this.handlerMouse(true)} onMouseLeave={this.handlerMouse(false)} style={{ backgroundColor: mouse ? "#ddd" : "white" }}>
                <input type="checkbox" checked={done} onChange={this.handlerChecked(id)} />
                <span>{name}</span>
                <button style={{ display: mouse ? "block" : "none" }} onClick={this.handlerDelete(id)}>delete</button>
            </li>
        )
    }
}
