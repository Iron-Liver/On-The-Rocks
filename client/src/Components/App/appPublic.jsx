import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Redirect} from 'react-router';

import categoryDetail from '../Categories/CategoryDetail/categoryDetail';
import Login from '../Users/UserLogin/userLogin'
import CreateUser from '../Users/UserAdd/createUser'
import resetPassword from '../Users/UserResetPassword/resetPassword'
import admin2FA from '../Users/Admin2FA/admin2FA'



function AppPublic() {

	 const currentUser = (JSON.parse(localStorage.getItem('profile')));
	 const adminAllowed = (JSON.parse(localStorage.getItem('2FA')))

	return (
			<BrowserRouter>
				
				<Route exact path='/category/:id' component={categoryDetail} />
				<Route exact path='/register' component= {CreateUser}/>
				<Route 
					exact path="/login"
					component={ () => (
						( !currentUser )
						? 
						( <Login/> )
						:
						(
							(currentUser.isAdmin && adminAllowed)
							?
							( <Redirect to="/private/panel" /> )
							:
							( <Redirect to={`/`} /> )
						) 
					)}
				
				/>
				<Route path="/verify/password" component = {resetPassword}/>
				<Route path="/verify/admin" component = {admin2FA}/>

			</BrowserRouter>
	);
}

export default AppPublic;
