import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...props }) => {

  const currentUser = (JSON.parse(localStorage.getItem('profile')));

  return (
    <Route {...props}>
      {currentUser ? (           
        <Component />
      ) : (            
        <Redirect to="/login"/> 
      )}
    </Route>
  )
};

export default AuthRoute;