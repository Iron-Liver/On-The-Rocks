import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import createCategory from '../Categories/CreateCategory/createCategory';
import categoryDetail from '../Categories/CategoryDetail/categoryDetail';


function AppPublic() {

	// const currentUser = (JSON.parse(localStorage.getItem('profile')));
	// const adminAllowed = (JSON.parse(localStorage.getItem('2FA')))

	return (
			<BrowserRouter>
				<Route exact path='/category/add' component={createCategory} />
				<Route exact path='/category/:id' component={categoryDetail} />
            </BrowserRouter>
	);
}

export default AppPublic;
