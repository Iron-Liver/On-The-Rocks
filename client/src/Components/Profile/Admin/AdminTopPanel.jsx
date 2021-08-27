import './AdminTopPanel.css';
import React, { useEffect } from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import verifyUser from '../../../Utils/verifyUser'
import { useDispatch } from 'react-redux';
import { readUser, logOutUser } from '../../../Redux/Users/userActions';
import swal from 'sweetalert';

const AdminTopPanel = () => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  const localProfile = verifyUser();
  if (localProfile?.hasOwnProperty("logout")) {
      dispatch(logOutUser());
      history.push("/");
      swal("Session expired", "Please login", "warning");
  }

  const userId = localProfile?.id 

  useEffect(() => {
    dispatch(readUser(userId));
  }, [dispatch, userId]);

  const logOutAlert = () => {
    swal({
      title: 'LogOut',
      text: 'Want to logout?',
      icon: 'warning',
      buttons: ['Cancel', 'Yes']
    }).then(answer => {
      if(answer){
        logOut();
      }
    })
  }
  
  const logOut = () => {
    dispatch(logOutUser())
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
        <div className="panel-top-nav-link" onClick={logOutAlert}>
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">Logout</h4>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AdminTopPanel