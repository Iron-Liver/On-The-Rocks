
import React, { useEffect } from 'react';
import UserOrders from '../../Orders/UserOrders/userOrders';
import UserPanel from './UserPanel';
import jwt from 'jsonwebtoken'
import { useParams, useHistory } from 'react-router';

export default function UserProfile() {

  let { userId, view } = useParams();
  const {id, email, isAdmin} = jwt.verify(JSON.parse(localStorage.getItem('token')), process.env.REACT_APP_SECRET_KEY)
  const localProfile = {id, email, isAdmin}
  console.log(localProfile)
  const history = useHistory();
  useEffect(() => {
    if(!userId) {
      history.push("/login");
    }
    if(!localProfile?.id || parseInt(userId) !== localProfile?.id) {
      history.push("/login");
    }
    if(!view) {
      history.push(`/private/profile/${userId}/dashboard`)
      view = "dashboard";
    }
  }, [userId, view, history]);

  return (
   <div style= {{display: "flex", justifyContent: "space-evenly"}}>
      {<UserPanel id={userId}/>}
      {
        view === 'orders' && (
          <div style= {{marginRight: 25}}>
            {<UserOrders />}
          </div>
        )
      }
      {
        view === 'settings' && (
          <h1>Settings</h1>
        )
      }
   </div>
  )
}

