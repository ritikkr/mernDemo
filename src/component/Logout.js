import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";


const Logout = (props) => {
    const history = useHistory();
    const loggingOut = async () => {
        try{
            const res = await fetch("/logout", {
                method:"GET",
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            if(res.status === 200){
                console.log("Im here");
                props.setIsLoggediN(false)
                history.push("/login")
            }
        }
        catch(err){
        console.log("Error in logout", err);
        }
    }
    useEffect(() => {
        if(props.isLoggediN === true){
            loggingOut();
        }
    }, [props.isLoggediN])
    return (
        <div>
            
        </div>
    )
}

export default Logout
