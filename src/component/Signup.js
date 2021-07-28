import React, { useState } from "react";
import "./static/css/Signup.css";
import {useHistory} from 'react-router-dom'
const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    })
    const history = useHistory();
    const handleInputs = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        setUser({...user, [property]:value})
        console.log(user)
    }

    const postData = async () => {
        // e.preventDefault();
        const {name, email, phone, work, password, cpassword} = user;
        const res = await fetch("/register", {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name, phone, email, work, password, cpassword
            })
        });
        const data = await res.json();
        if(res.status === 422 || !data) {
            window.alert("!Invalid Registration");
            console.log("!Invalid Registration");
        }
        else{
            window.alert("Registraion Sucessfull");
            console.log("Registraion Sucessfull");
            history.push("/login")
        }
    }
  return (
    <>
      <div class="container register-form">
        <div class="form">
          <div class="note">
            <p>Make Yourself Register with our website.</p>
          </div>

          <div class="form-content">
            <div class="row">
              <div class="col-md-6 mb-2">
                <div class="form-group mb-2">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="Your Name *"
                    defaultValue={user.name}
                    onChange={handleInputs}
                  />
                </div>
                
                <div class="form-group mb-2">
                  <input
                    type="text"
                    name="phone"
                    class="form-control"
                    placeholder="Phone Number *"
                    defaultValue={user.phone}
                    onChange={handleInputs}
                  />
                </div>
                <div class="form-group mb-2">
                  <input
                    type="text"
                    class="form-control"
                    name="password"
                    placeholder="Your Password *"
                    defaultValue={user.password}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <div class="col-md-6 mb-2">
              <div class="form-group mb-2">
                  <input
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="Your Email *"
                    defaultValue={user.email}
                    onChange={handleInputs}
                  />
                </div>
                
                <div class="form-group mb-2">
                  <input
                    type="text"
                    name="work"
                    class="form-control"
                    placeholder="Your Work *"
                    defaultValue={user.work}
                    onChange={handleInputs}
                  />
                </div>
                <div class="form-group mb-2">
                  <input
                    type="text"
                    class="form-control"
                    name="cpassword"
                    placeholder="Confirm Password *"
                    defaultValue={user.cpassword}
                    onChange={handleInputs}
                  />
                </div>
              </div>
            </div>
            <button type="button" class="btnSubmit" onClick={() => postData()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
