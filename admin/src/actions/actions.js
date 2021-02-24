import axios from 'axios'

export const LOGIN = 'LOGIN'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

const BASE_URL = 'http://localhost:9191/api/'

const getLoginAction = (data) => {
    return {
        type: LOGIN,
        data
    }
}


export const getLogin = (authPayload) => {
    return (dispatch) => {
        axios.post(BASE_URL, authPayload)
            .then((response) => {
                dispatch(getLoginAction(response.data))
            }).catch(error => {
                console.log(error.message)
            })
    }
}


//action to clear state
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}
