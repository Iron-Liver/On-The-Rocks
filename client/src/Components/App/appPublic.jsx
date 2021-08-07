import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import landingPage from '../LandingPage/landingPage'
import NavBar from '../NavBar/navBar'
// User Imports
import CreateUser from '../Users/UserAdd/createUser';
import LoginUser from '../Users/UserLogin/userLogin'
import UserUpdate from '../Users/UserUpdate/UpdateUser';
import ResetPassword from '../Users/UserResetPassword/resetPassword';
import Admin2FA from '../Users/Admin2FA/admin2FA';
// Product Imports
import products from '../Products/products';
import ProductDetail from '../Products/productDetail';
// Category Imports
import categoryDetail from '../Categories/CategoryDetail/categoryDetail';

function AppPublic() {

	return (
			<BrowserRouter>

				<Route path="/" component={NavBar}/>
				<Route exact path='/register' component= {CreateUser} />
				<Route exact path='/login' component={LoginUser} />
				<Route path='/verify/password' component={ResetPassword} />
				<Route path='/verify/admin' component={Admin2FA} />
				<Route exact path='/profile' component={UserUpdate} />
				<Route exact path='/products/:id' component={ProductDetail} />
				<Route path='/products' component={products} />
				<Route exact path='/category/:id' component={categoryDetail} />
				<Route exact path='/' component={landingPage} />

			</BrowserRouter>

	);
}

export default AppPublic;
