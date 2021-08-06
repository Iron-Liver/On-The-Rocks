import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
// User Imports
import UserList from '../Users/UserList/userList';
// Product Imports
import CreateProduct from '../Products/createProduct';
// Category Imports
import createCategory from '../Categories/CreateCategory/createCategory';
import updateCategory from '../Categories/UpdateCategory/updateCategory';
import adminPanel from '../Users/AdminPanel/adminPanel';

function AppPrivate() {

	return (

			<BrowserRouter>
				<Route path="/private/panel" component={adminPanel} exact/>
				<Route path="/private/category/add" component={createCategory} exact/>
				<Route path="/private/category/update/:id" component={updateCategory} exact/>
				<Route path='/private/product/add' component={CreateProduct} exact></Route>	
				<Route path='/private/user/list' component={UserList} exact></Route>	
            </BrowserRouter>

	);
}

export default AppPrivate;