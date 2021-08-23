import './AdminSidePanel.css';
import React, { useEffect } from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import { readUser, logOutUser } from '../../../Redux/Users/userActions';

const AdminSidePanel = () => {
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
    <>
      <aside className="admin-side-panel-container">
        <header className="admin-picture-container">
          <img 
            src="https://picsum.photos/220/220" 
            alt="admin-profile" 
            id="admin-picture" 
            draggable={false}
          />
        </header>
        <div className="admin-info-container">
          <h4 id="admin-panel-name">{user && user.name}</h4>
          <h5 id="admin-panel-username">{user && user.username} {"(Admin)"}</h5>
          <h4 id="admin-panel-email">{user && user.email}</h4>
        </div>
        <nav className="admin-nav-container">
          <NavLink 
            to={`${url}/dashboard`}
            activeClassName="admin-nav-active"
            isActive={(_match, location) => 
              location.pathname === `/private/profile/${userId}` ||
                location.pathname === `/private/profile/${userId}/dashboard`
            }
            draggable={false}
          >
            <div className="panel-nav-item" draggable={false}>
              <h4 draggable={false}>Dashboard</h4>
            </div>
          </NavLink>
          <NavLink 
            to={`${url}/orders`} 
            activeClassName="admin-nav-active"
            draggable={false}
          >
            <div className="panel-nav-item" draggable={false}>
              <h4 draggable={false}>Orders</h4>
            </div>
          </NavLink>
          <NavLink 
            to={`${url}/categories`} 
            activeClassName="admin-nav-active"
            draggable={false}
          >
            <div className="panel-nav-item" draggable={false}>
              <h4 draggable={false}>Categories</h4>
            </div>
          </NavLink>
          <NavLink 
            to={`${url}/products`} 
            activeClassName="admin-nav-active"
            draggable={false}
          >
            <div className="panel-nav-item" draggable={false}>
              <h4 draggable={false}>Products</h4>
            </div>
          </NavLink>
          <NavLink 
            to={`${url}/users`} 
            activeClassName="admin-nav-active"
            draggable={false}
          >
            <div className="panel-nav-item" draggable={false}>
              <h4 draggable={false}>Users</h4>
            </div>
          </NavLink>
          <div 
            className="panel-nav-item panel-admin-logout" 
            onClick={logOut}
            draggable={false}
          >
            <h4 draggable={false}>Logout</h4>
          </div>
        </nav>
      </aside>
      <div id="divider"></div>
    </>
  )
}

export default AdminSidePanel