import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
const NavBar = (props) => {
  
  const checkLog = async () =>{
    try {
      const res = await fetch("/checkLog", {
        method:"GET",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials:"include"
      });
      console.log("Already Logged in",res.status);
      if (res.status === 200){
        props.setIsLoggediN(true);
      }
      else{
        props.setIsLoggediN(false)
      }
    } catch (err) {
      
    }
  } 
  useEffect(() => {
    checkLog();
  }, [])
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" to="#">
            Navbar
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-0 mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              {props.isLoggediN ? (
                <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
                 
                </>
              ) : (
                <>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Registration
                    </NavLink>
                  </li>
                  </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
