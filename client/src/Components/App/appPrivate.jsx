import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import NavBar from '../NavBar/navBar'
// User Imports
import CreateUser from '../Users/UserAdd/createUser'
import UserList from '../Users/UserList/userList';
import UserUpdate from '../Users/UserUpdate/UpdateUser';
// Product Imports
import CreateProduct from '../Products/createProduct';
import updateProduct from '../Products/updateProduct';
import ProductsList from '../Products/ProductsList/productsList';
// Category Imports
import CategoryList from '../Categories/CategoryList/categoryList';
import createCategory from '../Categories/CreateCategory/createCategory';
import updateCategory from '../Categories/UpdateCategory/updateCategory';
import adminPanel from '../Users/AdminPanel/adminPanel';

function AppPrivate() {

	return (

			<BrowserRouter>
				<Route path="/" component={NavBar}/>
				<Route exact path='/private/panel/users' component={UserList} />
				<Route exact path='/private/panel/categories' component={CategoryList} />
				<Route exact path='/private/panel/products' component={ProductsList} />
				<Route exact path="/private/panel" component={adminPanel} />
				<Route exact path='/private/user/add' component={CreateUser} />
				<Route exact path='/private/user/update/:id' component={UserUpdate} />
				{/* <Route exact path='/private/user/:id' component={UserDetail} /> */}
				<Route exact path="/private/category/add" component={createCategory} />
				<Route exact path="/private/category/update/:id" component={updateCategory} />
				{/* <Route exact path='/private/product/:id' component={ProductDetail} /> */}
				<Route exact path='/private/product/add' component={CreateProduct} />
				<Route exact path='/private/product/update/:id' component={updateProduct} />
			</BrowserRouter>

	);
}

export default AppPrivate;