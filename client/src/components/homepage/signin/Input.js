import React from 'react'
import styled from 'styled-components'

const Input = ({ id, form, label, holder }) => {
  return (
    <Control>
      {/* <Label htmlFor={id} form={form}>
        {label}{' '}
      </Label> */}
      <Field id={id} type="text" placeholder={holder} />
    </Control>
  )
}

const Field = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: solid 1px #000;
  height: 40px;
  background: transparent;
  padding: 1em 0.5em;
  color: black;
  ::placeholder {
    color: black;
  }
`
const Label = styled.label`
  color: #fff;
  font-size: 20px;
`

const Control = styled.div`
  margin: 20px 0;
`

export default Input
