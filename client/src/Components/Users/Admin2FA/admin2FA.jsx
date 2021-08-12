import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import {allowAdmin} from '../../../Redux/Users/userActions'
import jwt from 'jsonwebtoken'
import swal from 'sweetalert'

export const Admin2FA = () => {
   const token = new URLSearchParams(window.location.search).get('token')
   localStorage.setItem('token', JSON.stringify(token))
   const currentUser = JSON.parse(localStorage.getItem('token')) 
                        ? jwt.verify(JSON.parse(localStorage.getItem('token')), process.env.REACT_APP_SECRET_KEY) 
                        : null
   const dispatch = useDispatch();
   const history = useHistory();

   useEffect(() => {
      if(typeof(currentUser?.Authenticated) !== 'undefined') {
         if(currentUser?.Authenticated){
            history.push('/')
            swal('Successful authentication', 'Welcome', 'success')
         }else{
            history.push('/')
            swal('Authentication failed', 'We are sorry!', 'error')
         }
      }
   },[currentUser?.Authenticated,history]);
   
   const adminAllowHandler = () => {
      dispatch(allowAdmin(token))
   }

   return (
      <fragment>
         { token
         ? typeof(currentUser?.Authenticated)=== 'undefined' && adminAllowHandler()
         : ( <Redirect to={'/login'} />)}
      </fragment>
   )
}

export default Admin2FA;
