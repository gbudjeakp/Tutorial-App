import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
