import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'

import rootReducer from 'reducers'

import { view as Home } from 'routes/home'
import About from 'routes/about'

import rootSaga from 'saga'

const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </HashRouter>
)

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)

// then run the saga
sagaMiddleware.run(rootSaga)

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
