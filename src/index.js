import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './_base.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.js'

ReactDOM.render(<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>, document.getElementById('root'))
