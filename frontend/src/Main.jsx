import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

function Main() {
  const [data, setData] = useState([])
  useEffect(()=>{
      axios.get('http://localhost:8080/')
     .then(res =>{
       console.log(res.data);
       
       setData(res.data)})
     .catch(err => console.log(err)
     );
      
  },[])

  const handleDelete = (id) =>{
    axios.delete('http://localhost:8080/delete/' + id)
    .then(res => {
        window.location.reload();
    })
    .catch(err => console.log(err)
    );
}
let count = 0;
{data.map((index)=>{
  count ++;
})}
console.log(count);

  return (
    <div className="container p-4">
  <div className="row g-3"> {/* 'g-3' adds spacing between the cards */}
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center px-4">
          <div>
            <h2 className='text-primary'>{count}</h2>
            <p>Arday guud</p>
          </div>
          <div>
            <i className="bi bi-luggage-fill fs-1 text-success"></i>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center px-4">
          <div>
            <h2 className='text-primary'>3000</h2>
            <p>Users-ka</p>
          </div>
          <div>
            <i className="bi bi-people-fill fs-1 text-success"></i>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center px-4">
          <div>
            <h2 className='text-primary'>3000</h2>
            <p>Tirad Gabdhaha</p>
          </div>
          <div>
            <i className="bi bi-person-lines-fill fs-1 text-success"></i>
            
          </div>
        </div>
      </div>
    </div>

   

    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center px-4">
          <div>
            <h2 className='text-primary'>3000</h2>
            <p>Tirada Wiilasha</p>
          </div>
          <div>
            <i className="bi bi-person-hearts fs-1 text-success"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h4 className='text-center text-success mt-3'>Ardayda diiwaan gashan</h4>
  <table className='table mt-2'>
    <thead>
      <tr>
        <th >ID</th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {data.map((xog ,index)=>{
        return(
        <tr key={index}>
          <td>{xog.ID}</td>
          <td>{xog.Name}</td>
          <td>{xog.Address}</td>
          <td>{xog.Email}</td>
          <td>
            <Link to={`/edit/${xog.ID}`} className='btn btn-success me-3'>Edit</Link>
             <button  onClick={()=> handleDelete(xog.ID)} className='btn btn-danger'>Delete</button>
          </td>
        </tr>
        )
      })}
    </tbody>
  </table>
</div>

  )
}

export default Main

// {data.map((xog ,index)=>{
//   <h3 className='text-light'>{xog.Name}</h3>
// })}