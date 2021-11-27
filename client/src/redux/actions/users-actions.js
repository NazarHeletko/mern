import axios from "axios";


export const GET_USERS = 'users/GET_USERS'
export const DELETE_USER = 'users/DELETE_USERS'

function getAllUsersAction(payload) {
    return {
        type: GET_USERS,
        payload
    }
}

export const getAllUsersThunk = () => {
    return (dispatch, getState) => {
        axios.get('http://localhost:5000/api/users').then(response => {
            dispatch(getAllUsersAction(response.data))
        }).catch(err => console.log(err))
    }
}

function deleteUserAction(uId) {
    return {
        type: DELETE_USER,
        payload: uId
    }
}

export const deleteUserThunk = ( uId) => {
    return (dispatch, getState) => {

        axios.delete('http://localhost:5000/api/users', {data: {id: uId}}).then(() => {
            dispatch(deleteUserAction(uId))
        }).catch(err => console.log(err))
    }
}

