import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin } from "../../actions/admin";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const adminName = useSelector((store) => store.adminName);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    Home
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {adminName !== "NO MATCH" && adminName !== "" ? (
                                <>
                                    {" "}
                                    <Link className="navbar-brand" to="/AdminTable">
                                        PriceConfig
                                    </Link>
                                </>
                            ) : (
                                <></>
                            )}
                        </li>
                    </ul>
                    {/* Login  */}
                    {adminName !== "NO MATCH" && adminName !== "" ? (
                        <>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                    dispatch(logoutAdmin());
                                    navigate('/');
                                }}
                            >
                                LogOut
                            </button>
                        </>
                    ) : (
                        <Login />
                    )}
                </div>
            </nav>
        </>
    );
}
