import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
//  components
import Heading from '../../components/dashboard/Heading'
import Card from '../../components/dashboard/Card'

//   data
import { line, pie } from '../../data/graph'
import {
  leadIconWithProps,
  quoteIconWithProp,
  customerIconWithProp,
} from '../../utils/icons'

const Dashboard = () => {
  const leadNum = useSpring({ number: 1245, from: { number: 0 } })
  const quoteNum = useSpring({ number: 345, from: { number: 0 } })
  const cusNUm = useSpring({ number: 500, from: { number: 0 } })

  return (
    <Wrapper>
      <Analytics>
        <Heading size="10px">Analytics</Heading>

        <Overview>
          <Card color="#01adfd" width="200px" height="250px" shadow>
            <CardBox>
              <Icon>{leadIconWithProps('lg')}</Icon>
              <Number>
                {leadNum.number.interpolate(number => Math.floor(number))}
              </Number>
              <CardTitle>Total Leads</CardTitle>
            </CardBox>
          </Card>
          <Card shadow color="#dc5ac7" width="200px" height="250px">
            <CardBox>
              <Icon>{quoteIconWithProp('lg')}</Icon>
              <Number>
                {quoteNum.number.interpolate(number => Math.floor(number))}
              </Number>
              <CardTitle>Total Quotes</CardTitle>
            </CardBox>
          </Card>
          <Card  shadow color="#ae83b9" width="200px" height="250px">
            <CardBox>
              <Icon>{customerIconWithProp('lg')}</Icon>
              <Number>
                {cusNUm.number.interpolate(number => Math.floor(number))}
              </Number>
              <CardTitle>Total Customers</CardTitle>
            </CardBox>
          </Card>
        </Overview>
        <Graphical>
          <Heading size="10px">Graphical Reports</Heading>
          <Card color="#fff" width="100%" height="250px">
            {line}
          </Card>
        </Graphical>
      </Analytics>
      <Reports>
        <Heading size="10px">Reports</Heading>
        <ReportContainer>
          <Card color="#fff" width="400px" height="550px">
            <CardWrapper>
              <div style={{ margin: 'auto', width: '80%' }}>
                <Heading size="20px">Top Leads</Heading>
                <p
                  style={{ textAlign: 'center', color: '#bcb4b4', fontSize: '20px' }}
                >
                  Overview of your top most performing professions
                </p>
              </div>
              {pie}
            </CardWrapper>
          </Card>
        </ReportContainer>
      </Reports>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-columns: 6fr 4fr;
`

const Analytics = styled.div`
  margin-left: 10px;
`
const Reports = styled.div`
  margin-right: 10px;
`

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
`
const Graphical = styled.div`
  margin-top: 20px;
`

const ReportContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`
const CardBox = styled.div`
  margin: 30px 20px 15px 20px;
  width: 90%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-contents: space-between;
  align-items: center;
`

const Icon = styled.div`
  font-size: 40px;
  text-align: center;
`
const Number = styled(animated.h1)`
  margin: 15px 0;
  font-size: 50px;
  text-align: center;
  font-weight: 300;
`
const CardTitle = styled.p`
  font-weight: bolder;
  font-size: 20px;
`
export default Dashboard
