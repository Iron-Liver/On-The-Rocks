import AdminOrders from '../../Orders/AdminOrders/AdminOrders';
import { React } from 'react';
import AdminProfile from './AdminProfile';


export default function AdminProfileOrders() {


  return (
    <div style={{ display: "flex", justifyContent: "space-evenly"}}>
         <AdminProfile />
      {

      }
      <div style={{marginRight: 20}}>
        {<AdminOrders />}
      </div>
    </div>
  )
}

