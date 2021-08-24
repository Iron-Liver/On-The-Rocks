import { Redirect, Route } from 'react-router-dom';
import verifyUser from '../../Utils/verifyUser'

const UserRoute = ({ component: Component, ...props }) => {

  const currentUser = verifyUser()

  return (
    <Route {...props}>
      {currentUser ? (
        currentUser.isAdmin && currentUser?.Authenticated? (
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