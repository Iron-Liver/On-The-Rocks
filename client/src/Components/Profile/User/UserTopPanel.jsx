import './UserTopPanel.css';
import React, { useEffect } from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import verifyUser from '../../../Utils/verifyUser'
import { useDispatch } from 'react-redux';
import { readUser, logOutUser } from '../../../Redux/Users/userActions';
import swal from 'sweetalert';

const UserTopPanel = () => {
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
        <div className="panel-top-nav-link" onClick={logOutAlert}>
          <div className="panel-top-nav-item">
            <h4 className="panel-top-nav-text">Logout</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserTopPanel
