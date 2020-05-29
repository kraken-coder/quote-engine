import React from 'react'
import Styled from 'styled-components'

const Card = ({ children, color, width, height, shadow }) => {

  
  return (
    <Wrapper width={width} shadow={shadow ? '5px 5px 25px 3px rgba(0,0,0,0.09), -5px -5px 25px 3px rgba(0,0,0,0.09)' : 'none'} height={height} color={color}>
      {children}
    </Wrapper>
  )
}

const Wrapper = Styled.div`
width: ${props => props.width};
height:${props => props.height};
background-color: ${props => props.color};
padding: 15px 10px;
border-radius: 40px;
box-shadow: ${props => props.shadow} ;
`

export default Card
