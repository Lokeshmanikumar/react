import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import {Store} from "./ReduxProject-3/Redux/Store"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {Store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)
 