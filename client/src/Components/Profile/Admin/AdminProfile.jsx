import AdminOrders from '../../Orders/AdminOrders/AdminOrders';
import { React, useEffect } from 'react';
import AdminPanel from './AdminPanel';
import { useHistory, useParams } from 'react-router-dom';
import UserList from '../../Users/UserList/userList';
import CategoryList from '../../Categories/CategoryList/categoryList';
import ProductsList from '../../Products/ProductsList/productsList';

export default function AdminProfile() {

  let { id, view } = useParams();

  const localProfile = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();
  useEffect(() => {
    if(!id) {
      history.push("/login");
    }
    if(!localProfile.id || parseInt(id) !== localProfile.id) {
      history.push("/login");
    }
    if(!view) {
      history.push(`/private/profile/${id}/dashboard`)
      view = "dashboard";
    }
  }, [id, view, history]);


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
        // <div style={{ display: 'flex', justifyContent:'center', width: '100%', marginRight:'10px'}}>
         <CategoryList/>
        // </div>
      }
      {
        view === 'create_product' &&
        //  <div style={{ display: 'flex', justifyContent:'center', width: '100%', marginRight:'10px'}}>
          <ProductsList/>
        // </div>
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

