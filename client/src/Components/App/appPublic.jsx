import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import Order from '../Orders/UserOrders/order';
// User Imports
import CreateUser from '../Users/UserAdd/CreateUser'
import LoginUser from '../Users/UserLogin/userLogin'
import ResetPassword from '../Users/UserResetPassword/resetPassword';
import Admin2FA from '../Users/Admin2FA/admin2FA';
// Product Imports
import products from '../Products/products';
import ProductDetail from '../Products/productDetail';
// Category Imports
import categoryDetail from '../Categories/CategoryDetail/categoryDetail';
import CreateOrder from '../Orders/CreateOrder/createOrder';

function AppPublic() {

	return (
			<BrowserRouter>

				<Route exact path='/register' component= {CreateUser} />
				<Route exact path='/login' component={LoginUser} />
				<Route path='/verify/password' component={ResetPassword} />
				<Route path='/verify/admin' component={Admin2FA} />

				<Route path='/products' component={products} exact />
				<Route path='/products/:id' component={ProductDetail} exact />

				<Route exact path='/category/:id' component={categoryDetail} />
				<Route exact path='/login' component= {CreateUser} />
				<Route exact path='/userOrder' component={Order} />
				<Route exact path='/createOrder' component={CreateOrder} />

			</BrowserRouter>

	);
}

export default AppPublic;
