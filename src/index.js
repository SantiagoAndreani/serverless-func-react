import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Products from './Products'
import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact>
        <App/>
      </Route>
      <Route path="/:productID">
        <Products/>
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
