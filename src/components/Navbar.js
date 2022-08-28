import React from 'react'
import './Navbar.css'
import { IoExpandOutline } from "react-icons/io5";
import { FcViewDetails } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function
  () {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-custom  ">
        <div className="container my-2">
          <a className="navbar-brand " to="#"><FcViewDetails size="1.7em" /><span className='mx-2' >RTI-TRACKER</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <IoExpandOutline size="1.3em"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
