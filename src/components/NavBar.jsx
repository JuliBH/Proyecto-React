import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navigationBar navbar navbar-expand-md">
          <div className="d-flex flex-row container-fluid">
            <Link to={"/"}> <img className="logoImg" src={"/imagenes/logo.png"} alt="logo" /> </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <h1 className="col-lg-8">Japan Store</h1>
            <div className="tm-2 collapse navbar-collapse justify-content-between" id="nav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <NavLink className="nav-link active text-white" aria-current="page" activeclassname="page"  to={"/category/snacks"}>Snacks</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active text-white" aria-current="page" activeclassname="page" to={"/category/candy"} >Candy</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active text-white" aria-current="page" activeclassname="page" to={"/category/drink"}>Drinks</NavLink>
                </li>
                <CartWidget />
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default NavBar;