import React from 'react'
import Styled from 'styled-components'

//  components
import SearchBar from './SearchBar'
import Heading from '../../dashboard/Heading'

//  uitls
import { notifyIconWithProps, settingsIconWithProps } from '../../../utils/icons'

const Navbar = ({ routes }) => {
  const isNotDashboard = window.location.pathname != '/admin/dashboard'

  const route = routes.filter(
    route => route.path + route.name === window.location.pathname,
  )

  return (
    <Wrapper>
      {!isNotDashboard ? (
        <Container>
          <Title>
            <h1>Quote Engine</h1>
          </Title>
          <SearchBar />
          <NavItems>
            <Button>{settingsIconWithProps('lg')}</Button>
            <Button>{notifyIconWithProps('lg')}</Button>
          </NavItems>
        </Container>
      ) : (
        <Container2>
          <Title>
            <h1>Quote Engine</h1>
          </Title>
          <PageTitle>
            <Icon>{route[0].icon}</Icon>
            <Heading size="20px">{route[0].title}</Heading>
          </PageTitle>
        </Container2>
      )}
    </Wrapper>
  )
}

const Wrapper = Styled.nav`
width: 100%;
background: transparent;
`

const Container = Styled.div`
padding: 20px 0 0 0 ;
display: grid;
grid-template-columns: 2fr 3fr 1fr;  
align-items: center; 
`
const Container2 = Styled.div`
padding: 20px 0 0 0 ;
display: flex;
flex-direction: row;
justify-content: space-between; 
align-items: center; 
`

const Title = Styled.div`
color: #01adfd;
font-size:30px; 
`

const NavItems = Styled.div`
display: flex;
align-items: center ;
`

const Button = Styled.button`
margin: 0 20px;
outline: none;
border:none; 
background: none; 
font-size: 20px;
color: #01adfd;
align-content: center;

`

const PageTitle = Styled.button`
outline: none;
border: none;
background: rgba(0,0,0,0.1);
padding: 0.5em 1.5em;
display:flex;
justify-content: center; 
align-items: center; 
border-radius: 30px;
`

const Icon = Styled.div`
  font-size: 35px;
  color: #dc5ac7;
  margin: 0 5px;
align-content: center;

`

export default Navbar
