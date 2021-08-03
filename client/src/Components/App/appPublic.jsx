import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import createCategory from '../Categories/createCategory';
import CreateUser from './Users/UserAdd/CreateUser';


function AppPublic() {

	// const currentUser = (JSON.parse(localStorage.getItem('profile')));
	// const adminAllowed = (JSON.parse(localStorage.getItem('2FA')))

	return (
			<BrowserRouter>
				<Route exact path='/login' component= {CreateUser}/>
				<Route path='/category/add' component={createCategory} exact></Route>
            </BrowserRouter>
	);
}

export default AppPublic;
