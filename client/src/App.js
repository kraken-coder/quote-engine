import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { createBrowserHistory } from 'history'
import { connect } from 'react-redux'



//  components for routes
import Admin from './views/Admin'
import Signin from './components/homepage/signin'


//  routing
import PrivateRoute from './routing/PrivateRoute'

import './App.css'

const App = ({auth: {isAuthenticated}}) => {
  const history = createBrowserHistory()
  return (
    <>
      <Router history={history}>
        <GlobalStyle />
        <Switch>

          
          <PrivateRoute path="/admin" auth={isAuthenticated} component={Admin} />
          <Route path="/signin" component={Signin} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;

}

body {
  font-family: 'Raleway', sans-serif;
  height: 100vh;
  overflow: hidden;
  background-color: #eae8e9;
}
a {
text-decoration:  none;
color: white;

}
`

const mapStateToProps = (state) => ({
  auth: state.auth
})





export default connect(mapStateToProps)(App)
