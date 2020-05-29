import React, {useEffect} from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import {getLeads} from '../../state/actions/data'
import SearchBar from '../../components/leads/Search'
import AddButton from '../../components/leads/AddButton'

const Leads = ({getLeads, data:{leads}}) => {

const [change, setChange] = React.useState(1)

   useEffect(() => {
    getLeads()
  }, [])

  

  return <Wrapper>
            <SearchBar />
            <AddButton  />
         </Wrapper>
}




const Wrapper = styled.div`
margin-top: 35px;

`


const mapStateToProps = (state) => ({
  data: state.data
})


const mapDispatchToProps = {
  getLeads
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads)
