import React from 'react'
import "../../styles/components/Navbar.css"

const Navbar = () => {
  return (
    <div >
      <nav class="navbar navbar-expand-lg  bg-body-tertiary ">
        <div class="container">
          {/* logo */}
          <span class="navbar-brand" >
            {/* <img src={nav_logo} alt="logo" /> */}
            <p>Sufyan</p>
            

          </span>
          {/* toggle btn */}
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* sidebar */}
          <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            {/* sidebar Header */}
            <div class="offcanvas-header  border-bottom">
              {/* <img className='mt-1' src={nav_logo} alt="logo" /> */}
              <h4>Sufyan Developer</h4>
              <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            {/* sidebar body  */}
            <div class="sidebar d-flex flex-column offcanvas-body offcanvas-start">
              <ul class="navbar-nav  p-3 justify-content-end align-items-center  flex-grow-1 pe-3">
                <li class="nav-item">
                  <span class="nav-link active text-primary" aria-current="page" >Home</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link  mx-3" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="#contact">Contact</a>
                </li>

              </ul>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
