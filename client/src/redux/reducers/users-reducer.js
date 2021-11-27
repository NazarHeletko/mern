import {DELETE_USER, GET_USERS} from "../actions/users-actions";

let initialState = {
    users: []
}

export const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_USERS:
            return {
                users: action.payload
            }
        case DELETE_USER:
            return {
                users: state.users.filter((el, index)=> el._id !== action.payload)
            }


        default: return state
    }
}