import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';

import createCategory from '../Categories/CreateCategory/createCategory';
import updateCategory from '../Categories/UpdateCategory/updateCategory';

function AppPrivate() {

	return (

			<BrowserRouter>

				<Route path="/private/category/add" component={createCategory} />
				<Route path="/private/category/update/:id" component={updateCategory} />
				
            </BrowserRouter>

	);
}

export default AppPrivate;