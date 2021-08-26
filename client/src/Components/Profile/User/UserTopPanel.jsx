import './UserTopPanel.css';
import React, { useEffect } from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { useDispatch } from 'react-redux';
import { readUser, logOutUser } from '../../../Redux/Users/userActions';

const UserTopPanel = () => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  const localProfile = JSON.parse(localStorage.getItem('token')) ? 
  jwt.verify(JSON.parse(localStorage.getItem('token')), 
  process.env.REACT_APP_SECRET_KEY) : null

  const userId = localProfile?.id 

  useEffect(() => {
    dispatch(readUser(userId));
  }, [dispatch, userId]);

  const logOut = () => {
    dispatch(logOutUser());
    history.push("/");
  }

  return (
    <div className="user-top-panel-container">
      <div className="user-top-nav-container">
        <NavLink 
          to={`${url}/orders`}
          activeClassName="user-top-nav-active"
          isActive={(_match, location) => 
            location.pathname === `/profile/${userId}` ||
              location.pathname === `/profile/${userId}/orders`
          }
          className="panel-top-nav-link"
        >
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">My orders</h4>
          </div>
        </NavLink>
        <NavLink 
          to={`${url}/settings`} 
          activeClassName="user-top-nav-active"
          className="panel-top-nav-link"
        >
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">Settings</h4>
          </div>
        </NavLink>
        <NavLink 
          to={`${url}/wishlist`} 
          activeClassName="user-top-nav-active"
          className="panel-top-nav-link"
        >
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">Wishlist</h4>
          </div>
        </NavLink>
        <NavLink 
          to={`${url}/coupons`} 
          activeClassName="user-top-nav-active"
          className="panel-top-nav-link"
        >
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">Coupons</h4>
          </div>
        </NavLink>
        <div className="panel-top-nav-link" onClick={logOut}>
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">Logout</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserTopPanel
