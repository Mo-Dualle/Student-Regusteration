import React from 'react'

function Nav({Toggle}) {
  return (
    
    <nav className="navbar navbar-dark bg- ">
        
        <div onClick={Toggle}>
        <i className="bi bi-justify-right text-light fs-3"></i>
        </div>

    <form className="d-flex me-4" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </nav>
  )
}

export default Nav