import React from 'react'
import { FaUser } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav class="navbar shadow-lg navbar-expand-lg bg-light sticky-top">
        <div class="container">
          <a class="navbar-brand" href="https://www.instagram.com/sanebugger/" target='_blank'>sanebugger</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><FcMenu /></span>
          </button>
          <div class="collapse navbar-collapse mx-4" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 px-4 py-2">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">Product</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contactus">Contact Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/aboutus">About Us</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </Link>
                <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" to="#">Action</Link></li>
                  <li><Link class="dropdown-item" to="#">Another action</Link></li>
                  <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>

              {/* usericon basically rightoffset here */}

              <button class="btn" id='botn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                     <FaUser color='white' />
              </button>

              <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                  <h5 id="offcanvasRightLabel">LogIn / LogOut</h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  ...
                </div>
              </div>
              {/* <div className="usericon px-4">
                <FaUser color='white' />
              </div> */}

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}
