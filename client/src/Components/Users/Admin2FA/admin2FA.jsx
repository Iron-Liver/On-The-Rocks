import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import {allowAdmin} from '../../../Redux/Users/UserActions'
import swal from 'sweetalert'

export const Admin2FA = () => {
   const {adminAllowed} = useSelector(state => state.userReducer)
   console.log(adminAllowed)
   const token = new URLSearchParams(window.location.search).get('token')
   const dispatch = useDispatch();
   const history = useHistory();

   useEffect(() => {
      if(typeof(adminAllowed) !== 'undefined') {
         if(adminAllowed){
            history.push('/private/panel')
            swal('Successful authentication', 'Welcome', 'success')
         }else{
            history.push('/')
            swal('Authentication failed', 'We are sorry!', 'error')
         }
      }
   },[adminAllowed,history]);
   
   const adminAllowHandler = () => {
      dispatch(allowAdmin(token))
   }

   return (
      <fragment>
         { token
         ? typeof(adminAllowed)=== 'undefined' && adminAllowHandler()
         : ( <Redirect to={'/login'} />)}
      </fragment>
   )
}

export default Admin2FA;
