import { Redirect, Route } from 'react-router-dom';
import verifyUser from '../../Utils/verifyUser'

const AuthRoute = ({ component: Component, ...props }) => {

  const currentUser = verifyUser()

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