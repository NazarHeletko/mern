import { combineReducers } from 'redux'
import {usersReducer} from './users-reducer.js'


export const rootReducer = combineReducers({
    users: usersReducer
})