import React from 'react';
import { Button } from '@material-ui/core';

export const landingPage = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <h1>Landing Page</h1>
            <Button href="http://localhost:3000/products">See products</Button>
            <Button href="http://localhost:3000/register">Register</Button>
        </div>
    )
}
export default landingPage