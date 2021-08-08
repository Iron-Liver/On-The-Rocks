import AdminOrders from '../../Orders/AdminOrders/AdminOrders';
import { React, useEffect } from 'react';
import AdminPanel from './AdminPanel';
import { useHistory, useParams } from 'react-router-dom';

export default function AdminProfile() {

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
    <div style={{ display: "flex", justifyContent: "space-evenly"}}>
         <AdminPanel />
      {
        view === 'orders' &&
      <div style={{marginRight: 20}}>
        {<AdminOrders />}
      </div>
      }
      {
        view === 'users' &&
         <h1> All users </h1>
      }
       {
        view === 'create_category' &&
        <h1>create  category </h1>
      }
       {
        view === 'create_product' &&
        <h1>create  products </h1>
      }
    </div>
  )
}

