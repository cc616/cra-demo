import { fork, take, put } from 'redux-saga/effects'
import * as actionTypes from './actions'

function* changeNumber(data) {
  try {
    yield put({
      type: actionTypes.CHANGE_NUMBER_RESULT.SUCCESS,
      data,
    })
  } catch (err) {
    console.log(err)
  }
}

export function* watchHome() {
  while (true) {
    const { data } = yield take(actionTypes.CHANGE_NUMBER)

    yield fork(changeNumber, data)
  }
}

export default watchHome
