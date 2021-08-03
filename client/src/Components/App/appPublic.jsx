import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import createCategory from '../Categories/CreateCategory/createCategory';


function AppPublic() {

	// const currentUser = (JSON.parse(localStorage.getItem('profile')));
	// const adminAllowed = (JSON.parse(localStorage.getItem('2FA')))

	return (
			<BrowserRouter>
				<Route path='/category/add' component={createCategory} exact></Route>
            </BrowserRouter>
	);
}

export default AppPublic;
