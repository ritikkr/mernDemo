import React, {useEffect, useState} from "react";
import avatar from "./static/image/customer.png";
import "bootstrap/dist/css/bootstrap.css";
import "./static/css/About.css";
import { useHistory } from "react-router-dom";
const About = (props) => {
    const [User, setUser] = useState('')
    const history = useHistory();
    const callAboutPage = async () => {
        try{
            const res = await fetch("/about", {
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            setUser(data)
            console.log(data);
            console.log(res.status);
            if(res.status === 401){
              history.push("/login")
            }
        }
        catch(err){
            console.log("Error: ",err);
            history.push("/login")

        }
    }

    useEffect(() => {
        callAboutPage();
        
    }, [props.isLoggediN])

  return (
    <div className="about-container">
      <div
        className="card"
        style={{
          width: "18rem",
          "backgroundColor": "#0093E9",
          "backgroundImage":
            "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        }}
      >
        <img src={avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text" style={{ borderBottom: "1px dashed gray" }}>
           {User.name}
          </p>
          <p className="card-text" style={{ borderBottom: "1px dashed gray" }}>
            {User.email}
          </p>
          <p className="card-text" style={{ borderBottom: "1px dashed gray" }}>
           {User.phone}
          </p>
          <p className="card-text" style={{ borderBottom: "1px dashed gray" }}>
            {User.work}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
