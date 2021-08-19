import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Error404 = () => {
  return (
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      color: "#493d30",
      background: "white",
      padding: "28px 0"
    }}>
      <div>
        <h1 style={{margin: 0}}>Error code: 404</h1>
        <h3>
          We can't find the page you are looking for!
        </h3>
        <h4>Useful links: </h4>
        <Link to="/">
          <Button style={{color: "#493d30"}}>Home</Button>
        </Link>
        <Link to="/products">
          <Button style={{color: "#493d30"}}>See products</Button>
        </Link>
        <Link to="/login">
          <Button style={{color: "#493d30"}}>Login</Button> 
        </Link>
        <Link to="/register">
          <Button style={{color: "#493d30"}}>register</Button> 
        </Link>
      </div>
    </div>
  )
}

export default Error404
