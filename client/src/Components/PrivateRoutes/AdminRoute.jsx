import { Redirect, Route } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...props }) => {
  
  const currentUser = (JSON.parse(localStorage.getItem('profile')));
	const adminAllowed = (JSON.parse(localStorage.getItem('2FA')))

  return (
    <Route {...props}>
      {currentUser ? (
        currentUser.isAdmin && adminAllowed ? (
          <Component />
        ) : (            
          <Redirect to="/"/>
        )
      ) : (            
        <Redirect to="/login"/> 
      )}
    </Route>
  )
};

export default AdminRoute;
