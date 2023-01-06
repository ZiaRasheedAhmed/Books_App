import React from "react";
import "../css/navbar.css";
import App from '../App';

const Navbar = () => {
    return (
        <>
            <nav className="navbar ">
                <div className="container-fluid">
                    <a className="navbar-brand">Reading Way</a>
                    <form className="form d-flex justify-content-center">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                    <i class="fa-solid fa-user"><a className="user" href="">User</a> </i>
                </div>
            </nav>
        </>
    );
}
export default Navbar;