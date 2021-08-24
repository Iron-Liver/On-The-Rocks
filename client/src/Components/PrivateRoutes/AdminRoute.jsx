import { Redirect, Route } from 'react-router-dom';
import verifyUser from '../../Utils/verifyUser'

const AdminRoute = ({ component: Component, ...props }) => {
  
  const currentUser = verifyUser()

  return (
    <Route {...props}>
      {currentUser ? (
        currentUser.isAdmin && currentUser?.Authenticated?(
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
