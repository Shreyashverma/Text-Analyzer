import React from 'react'
import PropTypes from 'prop-types'
import {
 Link
  } from "react-router-dom";
 


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <b><Link className="navbar-brand" to="/">{props.title}</Link></b>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <b><Link className="nav-link active" aria-current="page" to="/">Home</Link></b>
          </li>
          <li className="nav-item">
          <b> <Link className="nav-link" to="/about">About</Link></b>
          </li>
          
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode=== 'light'? 'dark':'light'}`}>
  <input className="form-check-input" type="checkbox"  role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
</div >
<div className={`text-${props.mode=== 'light'? 'light':'dark' }`}><label> ...</label></div>
<div className={`form-check form-switch text-${props.mode=== 'light'? 'dark':'light' }`}  >
<label>LightMode</label>
</div>
      </div>
    </div>
  </nav>
  );
}

Navbar.propTypes = {
    title : PropTypes.string,
    
}