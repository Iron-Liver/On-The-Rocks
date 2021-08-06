import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';

import CreateUser from '../Users/UserAdd/createUser';
/* import UpdateUser from '../Users/UserUpdate/updateUser';
 *//* import UserList from '../Users/UserList/userList'; */

import createCategory from '../Categories/CreateCategory/createCategory';
import updateCategory from '../Categories/UpdateCategory/updateCategory';
import CreateProduct from '../Products/createProduct';

function AppPrivate() {

	return (

			<BrowserRouter>

				<Route path="/private/category/add" component={createCategory} />
				<Route path="/private/category/update/:id" component={updateCategory} />
				<Route path='/category/add' component={createCategory} exact></Route>
				<Route path='/product/add' component={CreateProduct} exact></Route>
				{/* ============ User ==================== */}
				<Route exact path="/private/createuser" component={CreateUser} />
{/*                 <Route exact path="/private/updateuser/:id" component={UpdateUser} />
 */}				{/* <Route exact path="/private/userlist" component={UserList} /> */}
				
            </BrowserRouter>

	);
}

export default AppPrivate;