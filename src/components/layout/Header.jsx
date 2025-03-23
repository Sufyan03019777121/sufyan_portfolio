import React from 'react'
import header_img from '../../assets/images/header_img.jpeg'






const Header = () => {
  return (
    <div>
     
      <header className="bg-light ">
        <div className="container px-5">
          <div className="row align-items-center">
        
            <div
              className="col-lg-6 ">
              <div className="my-5">
                <h2 className="text-center fw-bold mb-2">Hi! I am Sufyan,</h2>
                <h2 className="text-primary text-center fw-bold mb-2">UI  React  developer</h2>
                <p className="text-muted mb-4">
                  A React.js developer to build responsive UI components for your web application? Look no further! I specialize in crafting modern, efficient, and user-friendly interfaces using React.js

                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-center">
                  <a className="btn btn-primary btn-large text-uppercase" href="#about">
                    Learn More
                   
                  </a>
                  <a className="btn btn-outline-primary btn-large text-uppercase" href="#projects">
                    View My Work
                   
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-xxl-6 justify-content-center">
              <img className="img-fluid rounded-3 my-5"
                src={header_img} alt="logo" />
            </div>
          </div>
        </div>

      </header>
      <hr />
    </div>
  )
}

export default Header
