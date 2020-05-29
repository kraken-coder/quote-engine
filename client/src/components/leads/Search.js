import React, { useState } from 'react'
import styled from 'styled-components'

import { iconWithProp } from '../../utils/icons'

const SearchBar = () => {
  const [value, setValue] = useState('')

  const handleChange = e => {
    const value = e.target.value
    setValue(value)
  }

  return (
    <SearchContainer>
    <BarContainer>
        <BarTitle>Search</BarTitle>
        <Bar
        onChange={e => handleChange(e)}
        placeholder="search something here"
        type="text"
        value={value}
        />
        <Search>{iconWithProp('lg')}</Search>
     </BarContainer>
 </SearchContainer>
  )
}





const SearchContainer = styled.div`
  background: #fff;
  border-radius: 30px;
//   filter: blur(4px);
`
const Bar = styled.input`
margin-left: 20px;
  border: none;
  width: 100%;
  height: 40px;
  font-size: 20px;
  :focus {
    border: none;
    outline: none;
    padding: 10px 2px;
  }
`
const BarContainer = styled.div`
  display: flex;
  align-items: center;
`
const BarTitle = styled.h3`
  padding: 20px 10px;
  border-right: solid 5px #eae8e9;
  color: #01adfd;
  font-weight: bold;
`

const Search = styled.button`
margin-right: 30px !important;
  outline: none;
  border: none;
  font-size: 25px;
  background: none;
  margin-right: 10px;
  color: #bcb4b4;
  font-weight: bold;

  :hover {
    color: black;
  }
`
export default SearchBar
