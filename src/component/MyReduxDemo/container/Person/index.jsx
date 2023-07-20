import React, { Component } from 'react'
import { nanoid, } from 'nanoid'
import store from '../../redux/store'
import { addPerson } from '../../redux/actions/person'

export default class Person extends Component {

    addPerson = () => {
        const person = {
            id: nanoid(),
            name: this.inputName.value,
            age: Math.floor(Math.random() * 100) //0-99}
        }
        store.dispatch(addPerson(person))
        this.inputName.value = '';

    }
    render() {
        // console.log(store)
        return (
            <div>
                <h2>这是Person组件</h2>
                <h3>上面组件的求和为:{store.getState().count}</h3>
                <hr />
                <ul>
                    {
                        store.getState().persons.map(p => (<li key={p.id}>name:{p.name} ==== age:{p.age}</li>))
                    }
                </ul>
                <input ref={(c) => { this.inputName = c }} type="text" />
                <button onClick={this.addPerson}>点击添加一个人</button>
            </div>
        )
    }
}
