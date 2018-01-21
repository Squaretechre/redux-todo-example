import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, { todos: [] }, composeEnhancers())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
