import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./static/css/Login.css";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const loginUser = async (e) => {
    e.preventDefault();
    try{

      const res = await fetch("/login", {
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email:email,
          password:password,
        }),
      });
      const data = res;
      if(data.status === 200)
      {
        window.alert("Login Suceesfuuly");
        props.setIsLoggediN(true)
        // console.log(props);
        history.push("/");
      }
      else if(data.status === 400){
        window.alert("wrong password");
      }
      else {
        window.alert("Invalid Credentials");
      }
    }
    catch(err){
      console.log("Error", err)
    }
    
  };
  return (
    <>
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" action="" method="post">
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      Email:
                    </label>
                    <br></br>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-5">
                    <label htmlFor="password" className="text-info">
                      Password:
                    </label>
                    <br></br>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      value="submit"
                      onClick={(e) => loginUser(e)}
                    />
                  </div>
                  <div id="register-link" className="text-right">
                    <a href="/signup" className="text-info">
                      Register here
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
