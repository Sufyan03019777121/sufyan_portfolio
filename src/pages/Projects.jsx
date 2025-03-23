import React from 'react'
import myPortfoli_pic from '../assets/images/myPortolio_pic.png'
import e_car_pic from "../assets/images/e_car_pic.png"
import book_store_pic from '../assets/images/book_store_pic.png'


const Projects = () => {
    return (
        <div>

            <section id="projects" class="text-center">
                <div class="container pt-5">
                    <div class="row justify-content-center">
                        <h2 class="fw-bold pb-3">Projects</h2>
                        <p class="lead text-muted mb-5">
                            <span style={{ color: "green", margin: "10px" }}> View some of my latest projects</span>
                        </p>
                    </div>
                </div>
                <div class="container mb-5 ">
                    <div class="row">
                        <div class="col-lg-4 mx-auto mb-5 ">
                            <div class="card h-100 shadow-lg border border-success bg-light">
                                <img class="card-img-top" src={e_car_pic} alt="Project 1" />
                                <div class="card-body p-4">
                                    <h5 class="card-title mb-3">
                                        <span className='text-primary'>
                                            Electric Car Project
                                        </span>

                                    </h5>
                                    <div class="mb-2">
                                        <div class="badge bg-primary rounded-pill">React</div>
                                        <div class="badge bg-primary rounded-pill">Material UI</div>
                                    </div>
                                    <p class="card-text">
                                        Electric Car Project built using React js,Material UI .

                                    </p>
                                </div>
                                <div class="card-footer bg-transparent mb-3">
                                    <a
                                        class="btn btn-outline-primary btn-sm text-uppercase"
                                        href="https://github.com/Sufyan03019777121/e-car-website.git"
                                        target="_blank"
                                        rel="noreferrer" 
                                    >
                                        <span class="material-icons-outlined me-1">code</span>
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mx-auto mb-5">
                            <div class="card h-100 shadow-lg border border-success bg-light">
                                <img class="card-img-top" src={myPortfoli_pic} alt="Project 2" />
                                <div class="card-body p-4">
                                    <h5 class="card-title mb-3">
                                        Portfolio Website
                                    </h5>
                                    <div class="mb-2">

                                        <div class="badge bg-primary rounded-pill">React</div>
                                        <div class="badge bg-primary rounded-pill">Material UI</div>
                                    </div>
                                    <p class="card-text">
                                        A portfolio website built using React and
                                        Material UI 5 .
                                    </p>
                                </div>
                                <div class="card-footer bg-transparent mb-3">
                                    <a
                                        class="btn btn-outline-primary btn-sm text-uppercase"
                                        href="https://github.com/Sufyan03019777121/portfolio3.git"
                                        target="_blank"
                                        rel="noreferrer" 
                                    >
                                        <span class="material-icons-outlined me-1">code</span>
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mx-auto mb-5">
                            <div class="card h-100 shadow-lg border border-success bg-light">
                                <img class="card-img-top" src={book_store_pic} alt="Project 3" />
                                
                                <div class="card-body p-4">
                                    <h5 class="card-title mb-3">
                                        <span className='text-success'>
                                            Book Store Project
                                        </span>
                                    </h5>
                                    <div class="mb-2">

                                        <div class="badge bg-primary rounded-pill">React</div>
                                        <div class="badge bg-primary rounded-pill">Material UI</div>
                                    </div>
                                    <p class="card-text">
                                        Book Store Project
                                        built using  React and Material UI 5.
                                    </p>
                                </div>
                                <div class="card-footer bg-transparent mb-3">
                                    <span
                                        class="btn btn-outline-primary btn-sm text-uppercase"
                                         href=""
                                        target="_blank"
                                        rel="noreferrer" 
                                    >
                                        <span class="material-icons-outlined me-1">comming soon</span>
                                        
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </section>

        </div>
    )
}

export default Projects
