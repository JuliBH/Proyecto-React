import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav class="navigationBar navbar navbar-expand-lg">
          <div class="container-fluid">
            <Link to={"/"}> <img className="logoImg" src={"./imagenes/logo.png"} alt="logo" /> </Link>
            <h1 className="col-md-9">Japan Store</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink className="nav-link active" aria-current="page" activeclassname="page"  to={"/category/snacks"}>Snacks</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link active" aria-current="page" activeclassname="page" to={"/category/candy"} >Candy</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link active" aria-current="page" activeclassname="page" to={"/category/drinks"}>Drinks</NavLink>
                </li>
                <CartWidget />
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default NavBar;