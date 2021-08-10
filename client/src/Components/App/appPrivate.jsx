import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import landingPage from '../LandingPage/landingPage'
import NavBar from '../NavBar/navBar'
// User Imports
import CreateUser from '../Users/UserAdd/CreateUser'
import LoginUser from '../Users/UserLogin/userLogin'
import ResetPassword from '../Users/UserResetPassword/resetPassword';
import Admin2FA from '../Users/Admin2FA/admin2FA';
import UserUpdate from '../Users/UserUpdate/updateUser';
// Product Imports
import CreateProduct from '../Products/createProduct';
import updateProduct from '../Products/updateProduct';
import products from '../Products/products';
import ProductDetail from '../Products/productDetail';
import ProductsList from '../Products/ProductsList/productsList';
// Category Imports
import categoryDetail from '../Categories/CategoryDetail/categoryDetail';
import createCategory from '../Categories/CreateCategory/createCategory';
import updateCategory from '../Categories/UpdateCategory/updateCategory';
import CategoryList from '../Categories/CategoryList/categoryList';
// Order Imports
import CreateOrder from '../Orders/CreateOrder/createOrder';
import AdminProfile from '../Profile/Admin/AdminProfile';
import OrderDetail from '../Orders/OrderDetail/orderDetail';

function AppPrivate() {

	return (

			<BrowserRouter>
				<Route path="/" component={NavBar}/>
				<Route exact path='/' component={landingPage} />
				<Route exact path='/login' component={LoginUser} />
        <Route exact path='/register' component= {CreateUser} />
				<Route path='/verify/password' component={ResetPassword} />
				<Route path='/verify/admin' component={Admin2FA} />
        <Route exact path='/products' component={products} />
				<Route exact path='/products/:id' component={ProductDetail} />
				<Route exact path='/category/:id' component={categoryDetail} />
				<Route exact path='/createOrder' component={CreateOrder} />
        <Route exact path='/order/:id' component={OrderDetail} />
				{/* <Route exact path='/profile' component={landingPage} /> */}
				<Route path='/private/profile/:userId?/:view?' component={AdminProfile} />
				<Route path="/private/category/update/:id" component={updateCategory} />
				<Route exact path='/private/category/add' component={createCategory} />
				<Route exact path='/private/product/add' component={CreateProduct} />
				<Route exact path='/private/product/update/:id' component={updateProduct} />
				<Route exact path='/private/user/update/:id' component={UserUpdate} />
				<Route exact path='/private/user/add' component={CreateUser} />
				<Route exact path='/private/panel/products' component={ProductsList} />
				<Route exact path='/private/panel/categories' component={CategoryList} />
				{/* <Route exact path='/private/user/:id' component={UserDetail} /> */}
      </BrowserRouter>
	);
}

export default AppPrivate;