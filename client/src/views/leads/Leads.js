import React, {useEffect} from 'react'
import Axios from 'axios'

const Leads = () => {
const [change, setChange] = React.useState(1)

   useEffect(() => {
    get()
  }, [change])


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

export default Leads
