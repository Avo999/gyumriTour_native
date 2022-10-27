import {LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGN_UP_FAIL,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAIL,
    GET_PROFILE_REQUEST,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL} from "../actions/userActions";
import { takeLatest, call, put } from 'redux-saga/effects'
import UserRequests from '../../api/UserRequests'
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function* watcher() {
    yield takeLatest(LOGIN_REQUEST, handleLogInRequest);
    yield takeLatest(SIGN_UP_REQUEST, handleSignUpRequest);
    yield takeLatest(GET_PROFILE_REQUEST, handleFetchProfile);
    yield takeLatest(UPDATE_USER_REQUEST, handleUpdateUser);
}

async function storeToken (token) {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (e) {
        console.log(e, 'djgvjdh')
    }
}

function* handleLogInRequest(action) {
    try {
        const {data} = yield call(UserRequests.logIn, action.payload.data);
        yield call(storeToken, data.token)
        yield put({
            type: LOGIN_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: LOGIN_FAIL,
            payload: e
        })
    }

}

function* handleSignUpRequest(action) {
    try {
        const {data} = yield call(UserRequests.signUp, action.payload.data);
        yield call(storeToken, data.token)
        yield put({
            type: SIGN_UP_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: SIGN_UP_FAIL,
            payload: e
        })
    }
}

function* handleFetchProfile (action) {
    try{
        const {data} = yield call(UserRequests.getProfile)
        yield put({
            type: GET_PROFILE_SUCCESS,
            payload: {data}
        })
    } catch(e){
        yield put({
            type: GET_PROFILE_FAIL,
            payload: e
        })
    }
}

function* handleUpdateUser (action) {
    try {
    const {data} =  yield call(UserRequests.updateUser, action.payload.data);
    yield put({
        type: UPDATE_USER_SUCCESS,
        payload: {data}
    })
    } catch (e) {
        yield put({
            type: UPDATE_USER_FAIL,
            payload: e
        })
    }
}