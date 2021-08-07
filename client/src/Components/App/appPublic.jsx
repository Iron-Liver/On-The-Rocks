import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import Order from '../Orders/UserOrders/order';
import landingPage from '../LandingPage/landingPage'
import NavBar from '../NavBar/navBar'
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
// Order Imports
import OrderDetail from '../Orders/OrderDetail/orderDetail';
import DisplayAdminOrders from '../Orders/AdminOrders/displayOrders';
import DisplayUserOrders from '../Orders/UserOrders/displayOrders';

function AppPublic() {

	return (
			<BrowserRouter>
				<Route path="/" component={NavBar}/>
				<Route exact path='/register' component= {CreateUser} />
				<Route exact path='/login' component={LoginUser} />
				<Route exact path='/login' component= {CreateUser} />
				<Route exact path='/profile' component={landingPage} />
				<Route path='/verify/password' component={ResetPassword} />
				<Route path='/verify/admin' component={Admin2FA} />

				<Route exact path='/products' component={products} />
				<Route exact path='/products/:id' component={ProductDetail} />

				<Route exact path='/category/:id' component={categoryDetail} />

        <Route exact path='/order/:id' component={OrderDetail} />
				<Route exact path='/user_orders' component={Order} />
				<Route exact path='/create_order' component={CreateOrder} />
        <Route exact path='/orders' component={DisplayAdminOrders} />
        <Route exact path='/userOrders/:userId' component={DisplayUserOrders} />
			</BrowserRouter>

	);
}

export default AppPublic;
