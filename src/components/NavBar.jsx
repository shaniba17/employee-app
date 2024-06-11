import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Employee App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Add Employee</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/search">Search Employee</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/delete">Delete Employee</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/view">View Employee</Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavBar