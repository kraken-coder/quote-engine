import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'





const PrivateRoute = ({ auth: {isAuthenticated, loading}, component: Component, ...rest} ) => {


  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated  && !loading  ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  )
}


const mapStateToProps = (state) => ({
  auth: state.auth
})



export default connect(mapStateToProps)(PrivateRoute)
