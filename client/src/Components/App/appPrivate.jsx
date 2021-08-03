import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';

import createCategory from '../Categories/CreateCategory/createCategory';

function AppPrivate() {

	return (

			<BrowserRouter>

				<Route exact path='/category/add' component={createCategory} />

            </BrowserRouter>

	);
}

export default AppPrivate;