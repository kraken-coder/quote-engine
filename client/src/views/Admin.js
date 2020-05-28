//  core modules
import React,{useEffect} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Styled from 'styled-components'

import { connect } from 'react-redux'
import {loadUser} from '../state/actions/auth'
 //  utilss
import { routes, accountRoutes, manageRoutes, overviewRoutes } from '../utils/routes'

//  components
import Sidebar from '../components/global/sidebar'
import Navbar from '../components/global/navabr'

const Admin = ({loadUser}) => {


useEffect(() => {
  loadUser()
}, [])


  const routeList = (
    <Switch>
      {routes.map(({ path, component, name }) => (
        <Route key={component} path={path + name} component={component} />
      ))}
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  )

  const routesprops = {
    main: routes,
    account: accountRoutes,
    manage: manageRoutes,
    overview: overviewRoutes,
  }

  return (
    <>
      <Container>
        <div>
          <Sidebar routes={routesprops} />
        </div>
        <Main>
          <Wrapper>
            <Navbar routes={routes} />
            {routeList}
          </Wrapper>
        </Main>
      </Container>
    </>
  )
}

const Container = Styled.div`
display: grid;
grid-template-columns: 1fr 5fr;

`

const Main = Styled.div`
border-left: solid 10px #01adfd;
margin-left: 10px;

border-top-left-radius: 4px;
border-bottom-left-radius: 4px;

`
const Wrapper = Styled.div`
 margin: auto;
 overflow: hidden;
 width: 95%;

 `


 
 
 const mapDispatchToProps = {
  loadUser
 }
 
export default connect(null,mapDispatchToProps)(Admin)
