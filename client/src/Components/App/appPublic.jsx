import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import createCategory from '../Categories/CreateCategory/createCategory';
import CreateUser from '../Users/UserAdd/CreateUser';
import CreateProduct from '../Products/createProduct';
import products from '../Products/products';

// import CreateUser from '../Users/UserAdd/CreateUser'
import categoryDetail from '../Categories/CategoryDetail/categoryDetail';

function AppPublic() {

	// const currentUser = (JSON.parse(localStorage.getItem('profile')));
	// const adminAllowed = (JSON.parse(localStorage.getItem('2FA')))

	return (
			<BrowserRouter>
				<Route exact path='/category/:id' component={categoryDetail} />
				<Route exact path='/login' component= {CreateUser}/>
				<Route path='/category/add' component={createCategory} exact></Route>
				<Route path='/product/add' component={CreateProduct} exact></Route>
				<Route path='/products' component={products} exact></Route>
            </BrowserRouter>
	);
}

export default AppPublic;
