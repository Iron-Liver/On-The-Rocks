import './Profile.css';
import React from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import UserOrders from '../Orders/UserOrders/userOrders';
import UserSidePanel from './User/UserSidePanel';
import UserTopPanel from './User/UserTopPanel';

const UserProfile = () => {
  const { userId } = useParams();
  const { path } = useRouteMatch();
  
  return (
    <div className="profile-container">
      <UserSidePanel />
      <UserTopPanel />
      <Switch>
        <div className="profile-tab-content">
          <Route exact path={path} component={UserOrders} />
          <Route exact path={`${path}/settings`} render={() => <h1 style={{ width: "100%", margin: 0}}>Settings</h1>} />
          <Route exact path={`${path}/wishlist`} render={() => <h1 style={{ width: "100%", margin: 0}}>Wishlist</h1>} />
          <Route exact path={`${path}/orders`} component={UserOrders} />
        </div>
      </Switch>
    </div>
  )
}

export default UserProfile
