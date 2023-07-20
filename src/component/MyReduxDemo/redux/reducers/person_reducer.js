import { ADD_PERSON } from "../constant";

const initState = [
    { id: '001', name: 'John', age: 20 },
    { id: '002', name: 'Tom', age: 21 },
    { id: '004', name: 'Kate', age: 22 },
]
export default function PersonReducer(preState = initState, action) {
    // console.log(preState)
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}