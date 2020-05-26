import React from 'react'
import Styled from 'styled-components'
import { connect } from 'react-redux'

const TopSection = ({ auth: { user } }) => {
  return (
    <Wrapper>
      <h2>Welcome!</h2>
      <h3>{user.name}</h3>
    </Wrapper>
  )
}
const Wrapper = Styled.div`
border-bottom: solid 5px #fff;
padding: 2em 1em;
flex-grow: 2;

`

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(TopSection)
