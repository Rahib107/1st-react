import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
<nav className={`navbar navbar-expand-lg  navbar-${props.mode}  bg-${props.mode}`}>
  <div className={`form-check form-switch my-8 text-${props.mode ==='light'?'#1c456b':'light'}`}>
<input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault"> mood</label>
</div>
<div className="container-fluid"/>
<a className={`navbar-brand text-${props.mode ==='light'?'dark':'light'}`} href="/">{props.titile}</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode ==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode ==='light'?'dark':'light'}`} to="/about">About</Link>
        </li>
        
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger" type="submit">Search</button>
        
      </form> */}
      </ul>
</div>
</nav>
</>
   
  )
}
Navbar.propTypes={titile:PropTypes.string,
    about:PropTypes.string}

Navbar.defaultProps={
    titile : "only saad",
    about : " "
}
