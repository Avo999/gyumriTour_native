import {
    GET_PROFILE_FAIL,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    LOGIN_FAIL, LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SET_TOKEN, SIGN_OUT,
    SIGN_UP_FAIL,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS
} from "../actions/userActions";

const initialState = {
    user: {},
    status: 'pending',
    error: {},
    token: '',
    loading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: {},
                error: {},
                status: 'ok',
                token: action.payload.data.token,
                loading: false
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
                token: '',
                loading: false
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
                loading: false
            }
        }
        case SIGN_UP_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                user: {},
                error: {},
                status: 'ok',
                token: action.payload.data.token,
                loading: false,
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
                },
                loading: false
            }
        }
        case GET_PROFILE_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_PROFILE_SUCCESS: {
            return{
                ...state,
                user: action.payload.data,
                status: 'ok',
                error: {},
                loading: false

            }
        }
        case GET_PROFILE_FAIL: {
            return{
                ...state,
                user: {},
                token: '',
                status: 'error',
                error: action.payload.data,
                loading: false
            }
        }
        case UPDATE_USER_REQUEST: {
            return{
                ...state,
                loading: true,
            }
        }
        case UPDATE_USER_SUCCESS: {
            return{
                ...state,
                user: action.payload.data,
                status: 'success',
                error: {},
                loading: false
            }
        }
        case UPDATE_USER_FAIL: {
            const err = action.payload.response.data.errors
            const path = action.payload.response.data.path
            return{
                ...state,
                error: {
                    err: err ? err : action.payload.response.data.message,
                    path: path ? path : null
                },
                status: 'error',
                loading: false
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

