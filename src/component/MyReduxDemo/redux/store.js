import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import count from './reducers/count'
import persons from './reducers/person'

const allReducers = combineReducers({ count, persons })

export default legacy_createStore(allReducers, applyMiddleware(thunk));


