import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'

import countReducer from './reducers/count_reducer'
import PersonReducer from './reducers/person_reducer';

import thunk from 'redux-thunk'

//合并reducer
const allReducers = combineReducers({
    he: countReducer,
    rens: PersonReducer
})

export default legacy_createStore(allReducers, applyMiddleware(thunk));