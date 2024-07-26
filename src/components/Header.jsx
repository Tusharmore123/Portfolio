import React from 'react'
import {Link,BrowserRouter as Router} from 'react-router-dom'
function Header() {
  return (
    <>
   
   <header>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid " style={{position:'fixed',zIndex:4}}>
  <div className="container-fluid fontText" >
    <div className="navbar-brand" to="#">Personal Portfolio</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center " id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#Aboutme">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Skills"  >Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#ContactDetails">Contact Details</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link " href="#Projects" role="button"  >
            Projects
          </a>
          
        </li>
        <li className="nav-item ">
          <a className="nav-link " href="#Experience" role="button"  >
            Experience
          </a>
          
        </li>
            
      </ul>

      </div>
      <div className="justify-content-end navbar-nav collapse navbar-collapse" id="navbarNavDropdown">
      <li className="nav-item" >
      <button type="button" className="btn btn-light   " ><a href='src/assets/Tushar_More_Resume.pdf' download="Tushar_More_Resume.pdf"><i className="fas fa-download"></i>Download Resume</a></button>
      </li>
    </div>
  </div>
</nav>
  
   </header>
    </>
  )
}

export default Header