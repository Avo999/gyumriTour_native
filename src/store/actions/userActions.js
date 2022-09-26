export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function fetchLogIn(data) {
    return {
        type: LOGIN_REQUEST,
        payload: { data, request: 'started' },
    }
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL'

export function fetchSignUp(data) {
    return {
        type: SIGN_UP_REQUEST,
        payload: { data, request: 'started' },
    }
}

export const SIGN_OUT = 'SIGN_OUT';
export function signOut(){
        return{
            type: SIGN_OUT,
            payload: {}
        }
}



export const SET_TOKEN = 'SET_TOKEN'
export function setToken(token) {
    return {
        type: SET_TOKEN,
        payload: { token },
    }
}


export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';

export function fetchProfile () {
    return {
        type: GET_PROFILE_REQUEST,
        payload: {}
    }
}
