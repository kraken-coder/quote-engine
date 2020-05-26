import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//  components
import HomeNavbar from '../../components/homepage/navbar/HomeNavbar'

const Home = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <div> Part</div>
          <div> Part</div>
        </Main>
      </Wrapper>
    </>
  )
}
const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%):
`

const Wrapper = styled.div`
  background-color: #eae8e9;
  height: 100vh;
  position: relative;
`

export default Home
