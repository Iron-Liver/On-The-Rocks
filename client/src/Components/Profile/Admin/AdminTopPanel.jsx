import './AdminTopPanel.css';
import React, { useEffect } from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import { readUser, logOutUser } from '../../../Redux/Users/userActions';

const AdminTopPanel = () => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.userReducer?.userDetail);

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
    <nav className="admin-top-panel-container">
      <div className="admin-top-nav-container">
        <NavLink 
          to={`${url}/dashboard`}
          activeClassName="admin-top-nav-active"
          isActive={(_match, location) => 
            location.pathname === `/private/profile/${userId}` ||
              location.pathname === `/private/profile/${userId}/dashboard`
          }
          className="panel-top-nav-link"
        >
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">Dashboard</h4>
          </div>
        </NavLink>
        <NavLink 
          to={`${url}/orders`} 
          activeClassName="admin-top-nav-active"
          className="panel-top-nav-link"
        >
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">Orders</h4>
          </div>
        </NavLink>
        <NavLink 
          to={`${url}/categories`} 
          activeClassName="admin-top-nav-active"
          className="panel-top-nav-link"
        >
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">Categories</h4>
          </div>
        </NavLink>
        <NavLink 
          to={`${url}/products`} 
          activeClassName="admin-top-nav-active"
          className="panel-top-nav-link"
        >
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">Products</h4>
          </div>
        </NavLink>
        <NavLink 
          to={`${url}/users`} 
          activeClassName="admin-top-nav-active"
          className="panel-top-nav-link"
        >
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">Users</h4>
          </div>
        </NavLink>
        <div className="panel-top-nav-link" onClick={logOut}>
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">Logout</h4>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AdminTopPanel