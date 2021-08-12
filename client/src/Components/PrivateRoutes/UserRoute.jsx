import { Redirect, Route } from 'react-router-dom';

const UserRoute = ({ component: Component, ...props }) => {

  const currentUser = (JSON.parse(localStorage.getItem('profile')));
	const adminAllowed = (JSON.parse(localStorage.getItem('2FA')))

  return (
    <Route {...props}>
      {currentUser ? (
        currentUser.isAdmin && adminAllowed ? (
          <Redirect to="/"/>
        ) : (            
          <Component />
        )
      ) : (            
        <Redirect to="/login"/> 
      )}
    </Route>
  )
};

export default UserRoute;