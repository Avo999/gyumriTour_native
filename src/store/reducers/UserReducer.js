import {
    GET_PROFILE_FAIL,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    LOGIN_FAIL, LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SET_TOKEN, SIGN_OUT,
    SIGN_UP_FAIL,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS
} from "../actions/userActions";

const initialState = {
    user: {},
    status: 'pending',
    error: {},
    token: '',
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: {},
                error: {},
                status: 'ok',
                token: action.payload.data.token
            }
        }
        case LOGIN_FAIL: {
            const err = action.payload.response.data.errors
            const path = action.payload.response.data.path
            return {
                ...state,
                user: {},
                status: 'error',
                error: {
                    err: err ? err : action.payload.response.data.message,
                    path: path ? path : null
                },
                token: ''
            }
        }
        case SET_TOKEN: {
            return {
                ...state,
                token: action.payload.token
            }
        }
        case SIGN_OUT: {
            return {
                ...state,
                user: {},
                status: 'pending',
                error: {},
                token: '',
            }
        }
        case SIGN_UP_REQUEST: {
            return {
                ...state,
            }
        }
        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                user: {},
                error: {},
                status: 'ok',
                token: action.payload.data.token
            }
        }
        case SIGN_UP_FAIL: {
            const err = action.payload.response.data.errors
            const path = action.payload.response.data.path
            return {
                ...state,
                user: {},
                status: 'error',
                token: '',
                error: {
                    err: err ? err : action.payload.response.data.message,
                    path: path ? path : null
                }
            }
        }
        case GET_PROFILE_REQUEST: {
            return {
                ...state
            }
        }
        case GET_PROFILE_SUCCESS: {
            return{
                ...state,
                user: action.payload.data,
                status: 'ok',
                error: {},

            }
        }
        case GET_PROFILE_FAIL: {
            return{
                ...state,
                user: {},
                token: '',
                error: action.payload.data
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

