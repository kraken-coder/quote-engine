import React from 'react'
import ReactDom from 'react-dom'
import '@babel/polyfill'
import App from './App'
import { Provider } from 'react-redux'
import store from './state/store'

const root = document.getElementById('app')
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  root,
)
