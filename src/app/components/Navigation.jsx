import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React from 'react'

// Define a DOM component. Connected to the rest of the application via the CONNECT method
const Navigation = () => (
    // React Component
    <div>
        {/* Similar to a <a> tag... but instead of a href, it has a to property where we specify what we want the URL to be*/}
        {/* We can put anything inside the LINK, if it's clicked, it will go to the 'to' path */}
        <Link to="/dashboard">
            <h1>My Application</h1>
        </Link>
    </div>
);


export const ConnectedNavigation = connect (state => state) (Navigation)