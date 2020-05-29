import React from 'react'
import Styled from 'styled-components'
import { connect } from 'react-redux'

const TopSection = ({ auth: { user } }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Image />
      </ImgWrapper>
      <h2>Welcome!</h2>
      <h3>hello</h3>
    </Wrapper>
  )
}
const Wrapper = Styled.div`
border-bottom: solid 5px #fff;
padding: 2em 1em;
flex-grow: 2;
`

const ImgWrapper = Styled.div`
`

const Image = Styled.img`

`

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(TopSection)
