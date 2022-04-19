import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Instaread
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {window.location.pathname === "/discover" ? <><li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/discover"
                                >
                                    Discover
                                </Link>
                            </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/search">
                                        Search
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/tryinstaread">
                                        Try Instaread
                                    </Link>
                                </li></> : window.location.pathname === "/search" ? <><li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        aria-current="page"
                                        to="/discover"
                                    >
                                        Discover
                                    </Link>
                                </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/search">
                                            Search
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/tryinstaread">
                                            Try Instaread
                                        </Link>
                                    </li></> : <><li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            aria-current="page"
                                            to="/discover"
                                        >
                                            Discover
                                        </Link>
                                    </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/search">
                                        Search
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/tryinstaread">
                                        Try Instaread
                                    </Link>
                                </li></>}



                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Login
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Signup
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
