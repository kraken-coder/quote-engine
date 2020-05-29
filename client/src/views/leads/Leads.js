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
import Card from '../../components/dashboard/Card'

const Leads = ({getLeads, data:{leads, leadsData}}) => {

  const converted = useSpring({ number: leadsData.converted, from: { number: 0} })

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
                <AnalyticsContainer>
                  <CardWrapper>
                    <Card color="#ae83b9" width="100%" height="150px" shadow={false}>
                      <Inner style={{display: 'flex', justifyContent: 'center', flexDirection: 'column',margin: '10px, 20px', color: 'white'}}>
                      
                      <Number>
                        {converted.number.interpolate(number => Math.floor(number))}
                    </Number>
                    <h4>Converted Leads</h4>
                      </Inner>
                    </Card>
                    </CardWrapper >
                    <CardWrapper>
                    <Card color="#ae83b9" width="100%" height="150px" shadow={false}>
                      <Number>
                        {converted.number.interpolate(number => Math.floor(number))}
                    </Number>
                    </Card>
                    </CardWrapper ><CardWrapper>
                    <Card color="#ae83b9" width="100%" height="150px" shadow={false}>
                      <Number>
                        {converted.number.interpolate(number => Math.floor(number))}
                    </Number>
                    </Card>
                    </CardWrapper >
                </AnalyticsContainer>
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

const Inner = styled.div`
align-items: center;


`
const Side  = styled.div`
margin-left:10px ;

`

const CardWrapper = styled.div`
margin: 20px 0;
`

const AnalyticsContainer = styled.div`
margin-top: 10px;
`

const Number = styled(animated.h1)`
font-size: 70px;

`
const mapStateToProps = (state) => ({
  data: state.data
})


const mapDispatchToProps = {
  getLeads
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads)
