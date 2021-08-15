import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const landingPage = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <h1>Landing Page</h1>
            <Link to="/products">
              <Button>See products</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
        </div>
    )
}
export default landingPage