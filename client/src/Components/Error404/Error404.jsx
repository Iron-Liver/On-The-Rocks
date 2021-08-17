import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Error404 = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div>
        <h1>Error code: 404</h1>
        <h3>
          We can't find the page you are looking for!
        </h3>
        <h4>Useful links: </h4>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/products">
          <Button>See products</Button>
        </Link>
        <Link to="/login">
          <Button>Login</Button> 
        </Link>
        <Link to="/register">
          <Button>register</Button> 
        </Link>
      </div>
    </div>
  )
}

export default Error404
