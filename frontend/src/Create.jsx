import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        id: '',
        name: '',
        address: '',
        email: ''
    })
    const handleSubmit =(e) =>{
        e.preventDefault();
       axios.post('http://localhost:8080/arday', values)
       .then(res => {
        console.log(res);
        navigate('/dash');
        
       })
       .catch(err => console.log(err))
        
    }

   
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-dark'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-center text-primary'>Ku dar Arday kale</h2>
                <div className='mb-2'>
                        <label htmlFor="">ID</label>
                        <input type="number" className='form-control' placeholder='Enter id' onChange={e=> setValues({...values, id: e.target.value})}/>
                </div>
                <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" className='form-control' placeholder='Enter name' onChange={e=> setValues({...values, name: e.target.value})}/>
                </div>
                <div className='mb-2'>
                        <label htmlFor="">Address</label>
                        <input type="text" className='form-control' placeholder='Enter address' onChange={e=> setValues({...values, address: e.target.value})}/>
                </div>
                <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="text" className='form-control' placeholder='Enter email' onChange={e=> setValues({...values, email: e.target.value})}/>
                </div>
                <button className='btn btn-success w-50'>KU DAR</button>
                <div className='d-flex justify-content-end'>
                    <Link to={'/dash'} className='btn btn-primary'>Go back</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create