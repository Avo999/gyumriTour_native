import { all, fork } from 'redux-saga/effects'
import user from './user'

export default function* watchers() {
    yield all([
        user
    ].map(fork))
}