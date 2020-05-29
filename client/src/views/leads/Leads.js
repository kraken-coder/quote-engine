import React, {useEffect} from 'react'
import Axios from 'axios'

import { connect } from 'react-redux'
import {getLeads} from '../../state/actions/data'

const Leads = ({getLeads, data:{leads}}) => {

const [change, setChange] = React.useState(1)

   useEffect(() => {
    getLeads()
  }, [])


  const get = async () => {

    try {
      const res  =await Axios.get('http://localhost:3000/api/leads')
      console.log('from respones', res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const add =  async () => {

    console.log('add ')

    const formData = {
      leadFName: 'james',
        leadLName: 'nick',
        job: 'doctor',
        
        age: '23',
        converted: false,
        interest: [
          'jogging',
          'writting'
        ],
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await Axios.post('http://localhost:3000/api/leads', formData, config)
     console.log(res)

     setChange(change + 1)
    } catch (error) {
      console.log(error)
      
    }
  }

  return <div>
            {/* <form>
              <input  onChange={handleChange={} } type='text' value={leads.firstname}/>
              <input  type='text' value={leads.firstname}/>
              <input  type='text' value={leads.firstname}/>
              <input  type='text' value={leads.firstname}/>
              <input  type='text' value={leads.firstname}/>

              <button type='submit'> Add leads</button>
            </form> */}
          <button onClick={add}>Add leads</button>

         </div>
}


const mapStateToProps = (state) => ({
  data: state.data
})


const mapDispatchToProps = {
  getLeads
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads)
