import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from 'reducers'

import Home from 'routes/home'
import About from 'routes/about'

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

const logger = store => next => (action) => {
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  return result
}

let composeEnhancers = compose
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  // eslint-disable-line
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, logger)),
)

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
