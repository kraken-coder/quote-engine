import React from 'react'
import styled from 'styled-components'

const HomeNavbar = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Quote Engine</Title>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background: transparent;
  position: fixed;
  top: 0;
`

const Container = styled.div`
  margin: auto;
  padding: 1em 0.5em;
  width: 80%;
`
const Title = styled.h1`
  color: #01adfd;
  font-size: 45px;
  font-weight: bold;
`

export default HomeNavbar
