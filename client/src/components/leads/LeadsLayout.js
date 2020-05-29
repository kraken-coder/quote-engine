import React from 'react'
import styled from 'styled-components'

const LeadsLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
const Wrapper = styled.div`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 500px;
  overflow-y: scroll;

`

export default LeadsLayout
