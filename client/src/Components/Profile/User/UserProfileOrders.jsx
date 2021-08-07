
import { React } from 'react';
import DisplayUserOrders from '../../Orders/UserOrders/displayOrders';
import UserProfile from './UserProfile';

export default function UserProfileOrders(id) {


  return (
   <div style= {{display: "flex", justifyContent: "space-evenly"}}>
      {<UserProfile />}
      <div style= {{marginRight: 25}}>
      {<DisplayUserOrders />}
      </div>
   </div>
  )
}

