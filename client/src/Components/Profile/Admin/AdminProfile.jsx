import AdminOrders from '../../Orders/AdminOrders/AdminOrders';
import { React, useEffect } from 'react';
import AdminPanel from './AdminPanel';
import { useHistory, useParams } from 'react-router-dom';
import CreateCategory from '../../Categories/CreateCategory/createCategory';
import CreateProduct from '../../Products/createProduct';
import UserList from '../../Users/UserList/userList';

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
        {<AdminPanel />}
      {
        view === 'orders' &&
      <div style={{marginRight: 20}}>
        {<AdminOrders />}
      </div>
      }
      {
        
        view === 'users' &&
         <UserList />
      }
      {
         view === 'create_category' &&
        <div style={{ display: 'flex', justifyContent:'center', width: '100%', marginRight:'10px'}}>
         <CreateCategory/>
        </div>
      }
      {
        view === 'create_product' &&
        <div style={{ display: 'flex', justifyContent:'center', width: '100%', marginRight:'10px'}}>
        <CreateProduct/>
        </div>
      }
      {
        view === 'dashboard' &&
        <div style={{ display: 'flex', justifyContent:'center', width: '100%', marginRight:'10px'}}>
          <h1>dashboard</h1>
        </div>
      }
    </div>
  )
}

