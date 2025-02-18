

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {id} = useParams();
    const navigate = useNavigate()
    const [values, setValues] = useState({
        id: '',
        name: '',
        address: '',
        email: ''
    })

  const handleUpdate = (event) =>{
    event.preventDefault();
    axios.put('http://localhost:8080/update/' +id, values)
   .then(res => {
    navigate('/dash')
    console.log(res.data)})
    .catch(err => console.error(err))
  }

    
    useEffect(()=>{
        axios.get('http://localhost:8080/edit/' +id)
       .then(res => {
        console.log(res.data[0].Name)
        
        setValues({...values, id:res.data[0].ID,
                            name:res.data[0].Name,
                            address:res.data[0].Address,
                            email:res.data[0].Email
                        });

        // setValues({...values, id:res.data[0].ID})
    })
       .catch(err => console.error(err))
    },[])



  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-dark'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpdate}>
                <h2 className='text-center text-primary'>wax ka Badal</h2>
                <div className='mb-2'>
                        <label htmlFor="">ID</label>
                        <input type="number" className='form-control' placeholder='Enter id' onChange={e=> setValues({...values, id: e.target.value})} value={values.id}/>
                </div>
                <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" className='form-control' placeholder='Enter name' onChange={e=> setValues({...values, name: e.target.value})} value={values.name}/>
                </div>
                <div className='mb-2'>
                        <label htmlFor="">Address</label>
                        <input type="text" className='form-control' placeholder='Enter address' onChange={e=> setValues({...values, address: e.target.value})} value={values.address}/>
                </div>
                <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="text" className='form-control' placeholder='Enter email' onChange={e=> setValues({...values, email: e.target.value})} value={values.email}/>
                </div>
                <button className='btn btn-success w-50'>BADAL</button>
            </form>
        </div>
    </div>
  )
}

export default Update
