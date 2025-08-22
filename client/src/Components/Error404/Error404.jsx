import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Error404 = () => {
  return (
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      color: "#372c2e",
      background: "white",
      padding: "28px 0",
      height: "65vh"
    }}>
      <div>
        <h1 style={{margin: 0}}>Error code: 404</h1>
        <h3>
          We can't find the page you are looking for!
        </h3>
        <h4>Useful links: </h4>
        <Link to="/">
          <Button style={{color: "#372c2e"}}>Home</Button>
        </Link>
        <Link to="/products">
          <Button style={{color: "#372c2e"}}>See products</Button>
        </Link>
        <Link to="/login">
          <Button style={{color: "#372c2e"}}>Login</Button> 
        </Link>
        <Link to="/register">
          <Button style={{color: "#372c2e"}}>register</Button> 
        </Link>
      </div>
    </div>
  )
}

export default Error404
