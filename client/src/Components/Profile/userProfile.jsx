import React from 'react'
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import CreateCategory from '../Categories/CreateCategory/createCategory';
import AdminOrders from '../Orders/AdminOrders/AdminOrders';
import UserOrders from '../Orders/UserOrders/userOrders';
import AdminProfile from './Admin/AdminProfile';
import UserProfile from './User/UserPanel';

const Profile = () => {
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
    <>
      {
        localProfile.isAdmin ? (
          <div>
            <AdminProfile currentView={view}/>
            <div>
              {view === 'orders' && <AdminOrders />}
              {view === 'category' && <CreateCategory />}
            </div>
          </div>
        ) : (
          <div>
            <UserProfile currentView={view}/>
            <div>
              {view === 'orders' && <UserOrders />}
            </div>
          </div>
        )
      }
    </>
  )
}
export default Profile