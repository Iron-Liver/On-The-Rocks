import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';

import CreateUser from '../Users/UserAdd/createUser';
import products from '../Products/products';

// import CreateUser from '../Users/UserAdd/CreateUser'
import categoryDetail from '../Categories/CategoryDetail/categoryDetail';
import ProductDetail from '../Products/productDetail';

function AppPublic() {

	return (
			<BrowserRouter>

				<Route exact path='/category/:id' component={categoryDetail} />
				<Route exact path='/login' component= {CreateUser}/>
				
				<Route path='/products' component={products} exact></Route>
				<Route path='/products/:id' component={ProductDetail} exact></Route>

			</BrowserRouter>
	);
}

export default AppPublic;
