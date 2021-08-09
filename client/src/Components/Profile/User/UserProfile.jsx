
import React, { useEffect } from 'react';
import UserOrders from '../../Orders/UserOrders/userOrders';
import UserPanel from './UserPanel';
import { useParams, useHistory } from 'react-router';

export default function UserProfile() {

  let { userId, view } = useParams();

  const localProfile = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();
  useEffect(() => {
    if(!userId) {
      history.push("/login");
    }
    if(!localProfile.id || parseInt(userId) !== localProfile.id) {
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
          <h1>HOLA</h1>
        )
      }
   </div>
  )
}

