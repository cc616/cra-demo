import { fork, all } from 'redux-saga/effects'
import { saga as HomeSaga } from 'routes/home'

export default function* root() {
  yield all([
    fork(HomeSaga.watchHome),
  ])
}
