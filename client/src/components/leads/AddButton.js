import React from 'react'
import styled from 'styled-components'

const AddButton = () => {
  return (
    <Wrapper>
      <Button>Add Lead</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  padding: 20px 10px;
  color: white;
  background-color: #00adfd;
`

export default AddButton
