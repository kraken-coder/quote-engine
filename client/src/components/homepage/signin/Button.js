import React from 'react'
import styled from 'styled-components'
const Button = () => {
  return (
    <>
      <Submit type="submit" value="Login" />
    </>
  )
}

const Submit = styled.input`
  border-radius: 30px;
  width: 100%;
  border: none;
  outline: none;
  color: white;
  background: #01adfd;
  padding: 0.5em 1em;
  font-size: 18px;
  pointer: cursor;
`

export default Button
