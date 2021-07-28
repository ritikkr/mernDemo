import React from 'react'
import "./static/css/ErrorPage.css"
import { NavLink } from 'react-router-dom'
const ErrorPage = () => {
    return (
        
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div class="error-actions">
                    <NavLink to="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                        Take Me Home </NavLink>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default ErrorPage
