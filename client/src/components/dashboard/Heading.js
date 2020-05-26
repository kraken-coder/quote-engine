import React from 'react'
import styled from 'styled-components'

const Heading = ({ children, size }) => {
  return (
    <Wrapper size={size}>
      <h1>{children}</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: #01adfd;
  font-size: ${props => props.size};
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 10px;
`
export default Heading
