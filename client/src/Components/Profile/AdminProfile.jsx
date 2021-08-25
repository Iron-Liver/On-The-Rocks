import './Profile.css';
import React, { useEffect } from 'react'
import { Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom'
import CategoryList from '../Categories/CategoryList/categoryList';
import AdminOrdersNew from '../Orders/AdminOrders/AdminOrdersNew';
import ProductsList from '../Products/ProductsList/productsList';
import UserList from '../Users/UserList/userList';
import AdminSidePanel from './Admin/AdminSidePanel';
import AdminTopPanel from './Admin/AdminTopPanel';
import jwt from 'jsonwebtoken'

const AdminProfile = () => {
  const { path } = useRouteMatch();

  let { userId: id } = useParams();

  const history = useHistory();

  const localProfile = JSON.parse(localStorage.getItem('token')) ? 
  jwt.verify(JSON.parse(localStorage.getItem('token')), 
  process.env.REACT_APP_SECRET_KEY) : null

  useEffect(() => {
    if(!id) {
      history.push("/login");
    }
    if(!localProfile.id || parseInt(id) !== localProfile.id) {
      history.push("/");
    }
  }, [id, history, localProfile]);

  return (
    <div className="profile-container">
      <AdminSidePanel />
      <AdminTopPanel />
      <Switch>
        <Route exact path={path} children={<h1 style={{ width: "100%" }}>Dashboard</h1>} />
        <Route exact path={`${path}/dashboard`} children={<h1 style={{ width: "100%" }}>Dashboard</h1>} />
        <Route exact path={`${path}/orders`} component={AdminOrdersNew} />
        <Route exact path={`${path}/categories`} component={CategoryList} />
        <Route exact path={`${path}/products`} component={ProductsList} />
        <Route exact path={`${path}/users`} component={UserList} />
      </Switch>
    </div>
  )
}

export default AdminProfile