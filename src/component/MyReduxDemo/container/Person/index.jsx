
import React, { Component } from 'react'
import { nanoid, } from 'nanoid'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'


class Person extends Component {

    addPerson = () => {
        const person = {
            id: nanoid(),
            name: this.inputName.value,
            age: Math.floor(Math.random() * 100) //0-99}
        }
        this.props.addPerson(person);
        this.inputName.value = '';

    }
    render() {
        console.log(this.props)
        const { count, persons } = this.props;
        return (
            <div>
                <h2>这是Person组件</h2>
                <h3>总共有{persons.length}个人， 上面组件的求和为:{count}</h3>
                <hr />
                <ul>
                    {
                        persons.map(p => (<li key={p.id}>name:{p.name} ==== age:{p.age}</li>))
                    }
                </ul>
                <input ref={(c) => { this.inputName = c }} type="text" />
                <button onClick={this.addPerson}>点击添加一个人</button>
            </div>
        )
    }
}



// a函数的返回值(必须是一个对象，参考传递pros的形式，key=value. 类似：<CountUI key={value}/>),作为状态传递给UI组件.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value--状态
// const a = data => ({ count: data.count, persons: data.persons })
// b函数的返回值(必须是一个对象，参考传递pros的形式，key=value. 类似：<CountUI key={value}/>),作为状态传递给UI组件.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value--操作状态的方法

// const b = (dispatch) => {
//     return {
//         addPerson: person => dispatch(addPerson(person))
//     }
// };

export default connect(
    data => ({ count: data.count, persons: data.persons }),
    {
        addPerson,
    }
)(Person);
