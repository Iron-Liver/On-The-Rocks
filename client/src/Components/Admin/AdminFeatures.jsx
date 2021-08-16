import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CreateCategory from '../Categories/CreateCategory/createCategory';
import UpdateCategory from '../Categories/UpdateCategory/updateCategory';
import CreateProduct from '../Products/createProduct';
import UpdateProduct from '../Products/updateProduct';
import CreateUser from '../Users/UserAdd/CreateUser';
import UpdateUser from '../Users/UserUpdate/updateUser';

const AdminFeatures = () => {
  const { path } = useRouteMatch();

  return (
    <div style= {{display: "flex", justifyContent: "space-evenly"}}>
      <Switch>
        <Route exact path={`${path}/category/add`} component={CreateCategory} />
        <Route exact path={`${path}/category/update/:id`} component={UpdateCategory} />
        <Route exact path={`${path}/user/add`} component={CreateUser} />
        <Route exact path={`${path}/user/update/:id`} component={UpdateUser} />
        <Route exact path={`${path}/product/add`} component={CreateProduct} />
        <Route exact path={`${path}/product/update/:id`} component={UpdateProduct} />
      </Switch>
    </div>
  )
}

export default AdminFeatures
