import './Profile.css';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import UserOrders from '../Orders/UserOrders/userOrders';
import UserSidePanel from './User/UserSidePanel';
import UserTopPanel from './User/UserTopPanel';
import Wishlist from '../Wishlist/wishlist';
import UserUpdate from '../Users/UserUpdate/updateUser'

const UserProfile = () => {
  const { path } = useRouteMatch();
  
  return (
    <div className="profile-container">
      <UserSidePanel />
      <UserTopPanel />
      <Switch >
        {/* <div className="profile-tab-content"> */}
          <Route exact path={path} component={UserOrders} />
          <Route exact path={`${path}/settings`} component={UserUpdate} />
          <Route exact path={`${path}/wishlist`} component={Wishlist} />
          <Route exact path={`${path}/orders`} component={UserOrders} />
        {/* </div> */}
      </Switch>
    </div>
  )
}

export default UserProfile
