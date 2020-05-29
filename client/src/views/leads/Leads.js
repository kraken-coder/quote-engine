import React, {useEffect} from 'react'
import styled from 'styled-components'
import {animated, useSpring} from 'react-spring' 


// redux
import { connect } from 'react-redux'
import {getLeads} from '../../state/actions/data'

// components
import SearchBar from '../../components/leads/Search'
import AddButton from '../../components/leads/AddButton'
import LeadsLayout from '../../components/leads/LeadsLayout'

const Leads = ({getLeads, data:{leads}}) => {
const converted = useSpring({ number: 1245, from: { number: 0 } })
const [change, setChange] = React.useState(1)

   useEffect(() => {
    getLeads()
  }, [])

  

  return <Wrapper>
            <Main>
              <SearchBar />
              <LeadsLayout>
                {leads.map(lead => (<h1> {lead.leadFName}</h1>))}
              </LeadsLayout>
            </Main>
              <Side>
               <AddButton  />
               
              </Side>
         </Wrapper>
}




const Wrapper = styled.div`
margin-top: 35px;
display: grid;
grid-template-columns: 3fr 1fr; 
margin: ;

`

const Main = styled.div`
margin-right:10px ;
display: flex;
flex-direction: column;

`
const Side  = styled.div`
margin-left:10px ;

`

const mapStateToProps = (state) => ({
  data: state.data
})


const mapDispatchToProps = {
  getLeads
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads)
