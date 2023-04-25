import React, { Component } from 'react'
import { Link } from "react-router-dom"

export class Navbar extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <Link className="navbar-brand" to={"/"}>Amazed With Cuisines</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item"><Link className="nav-link active" aria-current="page" to={"/"}>HOME</Link></li>
         <li className="nav-item"><Link className="nav-link active"  to={"/indian"}>INDIAN</Link></li>
         <li className="nav-item"><Link className="nav-link active"  to={"/american"}>AMERICAN</Link></li>
         <li className="nav-item"><Link className="nav-link active"  to={"/italian"}>ITALIAN</Link></li>
         <li className="nav-item"><Link className="nav-link active"  to={"/japanese"}>JAPANESE</Link></li>
         <li className="nav-item"><Link className="nav-link active"  to={"/chinese"}>CHINESE</Link></li>
    
       
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
