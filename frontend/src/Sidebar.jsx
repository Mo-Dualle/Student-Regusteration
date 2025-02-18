import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar({ collapsed }) {
  return (
    <div>
      <div className={`m-2 ${collapsed ? 'text-center' : ''}`}>
        <i className="bi bi-mortarboard-fill me-4 fs-1 text-success"></i>
        {!collapsed && <span className='brand-name fs-1 text-primary'>ARDAY</span>}
      </div>

      <hr className='text-dark'></hr>

      <div className='list-group list-group-flush'>
        <a className='list-group-item mb-3 d-flex align-items-center'>
          <i className='bi bi-speedometer2 fs-3'></i>
          {!collapsed && <span className='fs-4 ms-3'>Dashboard</span>}
        </a>

        <a className='list-group-item my-2 d-flex align-items-center'>
          <i className="bi bi-house-check-fill fs-4"></i>
          {!collapsed && <span className='fs-5 ms-3'>Home</span>}
        </a>

        <Link to={'/create'} className='list-group-item my-2 d-flex align-items-center'>
          <i className="bi bi-ui-checks fs-4"></i>
          <Link to={'/create'} className={`text-decoration-none text-dark fs-5 ${collapsed ? 'd-none' : 'ms-3'}`}>Forms</Link>
        </Link>

        <a className='list-group-item my-2 d-flex align-items-center'>
          <i className="bi bi-person-check-fill fs-4"></i>
          {!collapsed && <span className='fs-5 ms-3'>Users</span>}
        </a>

        <a className='list-group-item d-flex align-items-center'>
          <i className="bi bi-box-arrow-left fs-4"></i>
          <Link to={'/'} className={`fs-5 text-decoration-none text-dark ${collapsed ? 'd-none' : 'ms-3'}`}>LogOut</Link>
        </a>
      </div>
    </div>
  )
}

export default Sidebar;
