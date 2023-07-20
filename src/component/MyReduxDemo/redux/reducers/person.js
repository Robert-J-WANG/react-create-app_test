import { ADD_PERSON } from '../constant'
import { nanoid } from 'nanoid'

const initState = [
    { id: nanoid(), name: 'Peter', age: Math.floor(Math.random() * 100) },
    { id: nanoid(), name: 'John', age: Math.floor(Math.random() * 100) },
    { id: nanoid(), name: 'Max', age: Math.floor(Math.random() * 100) }
]
export default function addPerson(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}