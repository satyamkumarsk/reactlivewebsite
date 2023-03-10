import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
     <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">SkWeb</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="menu_active" to="/service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="menu_active" to="/contect">Contect</Link>
        </li>  
        <li className="nav-item">
          <Link activeClassName="menu_active" className="nav-link"  to="/about">About</Link>
        </li> 
         
      </ul>
    </div>
  </div>
</nav>
</div>
 </div>
  </div>
    </>
  )
}

export default Navbar
