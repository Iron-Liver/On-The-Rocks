import React from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import UserOrders from '../Orders/UserOrders/userOrders';
import UserPanel from './User/UserPanel'

const UserProfile = () => {
  const { userId } = useParams();
  const { path } = useRouteMatch();
  
  return (
    <div style= {{display: "flex", justifyContent: "space-evenly"}}>
      {/* <UserPanel id={userId}/> */}
      <Switch>
        <Route exact path={path} component={UserOrders} />
        <Route exact path={`${path}/settings`} render={() => <h1>Settings</h1>} />
        <Route exact path={`${path}/orders`} component={UserOrders} />
      </Switch>
    </div>
  )
}

export default UserProfile
