import './Profile.css';
import React, { useEffect } from 'react'
import { Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom'
import CategoryList from '../Categories/CategoryList/categoryList';
import AdminOrdersNew from '../Orders/AdminOrders/AdminOrdersNew';
import ProductsList from '../Products/ProductsList/productsList';
import UserList from '../Users/UserList/userList';
import AdminSidePanel from './Admin/AdminSidePanel';
import AdminTopPanel from './Admin/AdminTopPanel';
import { useDispatch } from "react-redux";
import verifyUser from "../../Utils/verifyUser";
import swal from "sweetalert";
import { logOutUser } from "../../Redux/Users/userActions";
import Dashboard from '../Dashboard/Dashboard';



const AdminProfile = () => {
  const { path } = useRouteMatch();

  let { userId: id } = useParams();
  const dispatch = useDispatch()
  const history = useHistory();

  const localProfile = verifyUser();
    if (localProfile?.hasOwnProperty("logout")) {
        dispatch(logOutUser());
        history.push("/");
        swal("Session expired", "Please login", "warning");
    }


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
        <Route exact path={path} children={Dashboard} />
        <Route exact path={`${path}/dashboard`} children={Dashboard} />
        <Route exact path={`${path}/orders`} component={AdminOrdersNew} />
        <Route exact path={`${path}/categories`} component={CategoryList} />
        <Route exact path={`${path}/products`} component={ProductsList} />
        <Route exact path={`${path}/users`} component={UserList} />
      </Switch>
    </div>
  )
}

export default AdminProfile