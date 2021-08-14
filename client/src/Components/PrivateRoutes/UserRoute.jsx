import { Redirect, Route } from 'react-router-dom';
import jwt from "jsonwebtoken"

const UserRoute = ({ component: Component, ...props }) => {

  const currentUser = JSON.parse(localStorage.getItem('token')) ? 
  jwt.verify(JSON.parse(localStorage.getItem('token')), 
  process.env.REACT_APP_SECRET_KEY) : null

  return (
    <Route {...props}>
      {currentUser ? (
        currentUser.isAdmin && currentUser?.Authenticated? (
          <Redirect to="/"/>
        ) : (            
          <Component />
        )
      ) : (            
        <Redirect to="/login"/> 
      )}
    </Route>
  )
};

export default UserRoute;