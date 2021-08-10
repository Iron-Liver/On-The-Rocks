import React, { useEffect } from 'react'
import { Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom'
import CategoryList from '../Categories/CategoryList/categoryList';
import AdminOrders from '../Orders/AdminOrders/AdminOrders';
import ProductsList from '../Products/ProductsList/productsList';
import UserList from '../Users/UserList/userList';
import AdminPanel from './Admin/AdminPanel';
const AdminProfile = () => {
  const { path } = useRouteMatch();

  let { userId: id } = useParams();

  const history = useHistory();

  const localProfile = JSON.parse(localStorage.getItem('profile'));
  
  useEffect(() => {
    if(!id) {
      history.push("/login");
    }
    if(!localProfile.id || parseInt(id) !== localProfile.id) {
      history.push("/");
    }
  }, [id, history, localProfile]);

  return (
    <div style= {{display: "flex", justifyContent: "space-evenly"}}>
      <AdminPanel id={id}/>
      <Switch>
        <Route exact path={path} children={<h1>Dashboard</h1>} />
        <Route exact path={`${path}/dashboard`} children={<h1>Dashboard</h1>} />
        <Route exact path={`${path}/orders`} component={AdminOrders} />
        <Route exact path={`${path}/categories`} component={CategoryList} />
        <Route exact path={`${path}/products`} component={ProductsList} />
        <Route exact path={`${path}/users`} component={UserList} />
      </Switch>
    </div>
  )
}

export default AdminProfile