import './UserSidePanel.css';
import React, { useEffect } from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import { readUser, logOutUser } from '../../../Redux/Users/userActions';
import swal from 'sweetalert';

const UserSidePanel = () => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.userReducer?.userDetail);
  
  const localProfile = JSON.parse(localStorage.getItem('token')) ? 
  jwt.verify(JSON.parse(localStorage.getItem('token')), 
  process.env.REACT_APP_SECRET_KEY) : null
  
  const userId = localProfile?.id 
  
  const updateUser = (userId) => {
    dispatch(readUser(userId));
  } 
  
  if(user?.hasOwnProperty('success') || user?.hasOwnProperty('error')) {updateUser(userId)}

  useEffect(() => {
    updateUser(userId)
  }, // eslint-disable-next-line
  [userId]);

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

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
    dispatch(logOutUser());
    history.push("/");
  }

  return (
    <>
      <div className="user-side-panel-container">
        <div className="user-picture-container">
          <img 
            src="https://picsum.photos/220/220" 
            alt="user-profile" 
            id="user-picture" 
            draggable={false}
          />
        </div>
        <div className="user-info-container">
          <h4 id="user-panel-name">{user && user.name}</h4>
          <h5 id="user-panel-username">{user && user.username}</h5>
          <h4 id="user-panel-email">{user && user.email}</h4>
        </div>
        <div className="user-nav-container">
          <NavLink 
            to={`${url}/orders`}
            activeClassName="user-nav-active"
            isActive={(_match, location) => 
              location.pathname === `/profile/${userId}` ||
                location.pathname === `/profile/${userId}/orders`
            }
          >
            <div className="panel-nav-item">
              <h4>My orders</h4>
            </div>
          </NavLink>
          <NavLink 
            to={`${url}/settings`} 
            activeClassName="user-nav-active"
          >
            <div className="panel-nav-item">
              <h4>Settings</h4>
            </div>
          </NavLink>
          <NavLink 
            to={`${url}/wishlist`} 
            activeClassName="user-nav-active"
          >
            <div className="panel-nav-item">
              <h4>Wishlist</h4>
            </div>
          </NavLink>
          <NavLink 
            to={`${url}/coupons`} 
            activeClassName="user-nav-active"
          >
          <div className="panel-nav-item">
              <h4>Coupons</h4>
            </div>
          </NavLink> 
          <div className="panel-nav-item panel-user-logout" onClick={logOutAlert}>
            <h4>Logout</h4>
          </div>
        </div>
      </div>
      <div id="divider"></div>
    </>
  )
}

export default UserSidePanel
