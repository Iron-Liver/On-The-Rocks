import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
// User Imports

// Product Imports
import CreateProduct from '../Products/createProduct';
// Category Imports
import createCategory from '../Categories/CreateCategory/createCategory';
import updateCategory from '../Categories/UpdateCategory/updateCategory';

function AppPrivate() {

	return (

			<BrowserRouter>

				<Route path="/private/category/add" component={createCategory} />
				<Route path="/private/category/update/:id" component={updateCategory} />
				<Route path='/category/add' component={createCategory} exact></Route>
				<Route path='/product/add' component={CreateProduct} exact></Route>
				
            </BrowserRouter>

	);
}

export default AppPrivate;