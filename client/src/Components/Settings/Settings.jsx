// import { React, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { updateUser } from '../../Redux/Users/userActions';

// const settingForm = {
//   name:'',
//   email: '',
//   profilePicture: '',
//   location: '',
// }

// export default function Settings() {

//   const [formC, setformC] = useState(settingForm)

//   const updateUser = () => {
//     dispatch(updateUser(formC))
//   }

//   const handleInputChange = ( e ) => {
//     const  { name, value } = e.target;
    
//     setformC({
//       ...formC,
//       [name]: value
//     });
//   }

//   return (
//     <div className="settingsCont">
//         <div className="InputSettingsContainer">
//         <input type="text" placeholder="Name" id="name" name="name" value={formC.name} onChange={handleInputChange} className="settingInput"/>

//         <input type="text" placeholder="Email" id="email" name="email" value={formC.email} onChange={handleInputChange} className="settingInput"/>

//         <input type="text" placeholder="Location" id="location" name="location" value={formC.location} onChange={handleInputChange} className="settingInput"/>

//         <input type="text" placeholder="ProfilePicture" id="profilePicture" name="profilePicture" value={formC.profilePicture} onChange={handleInputChange} className="settingInput"/>
//         </div>
//         <div className="buttonSettings">
//         <button onClick={updateUser}>Commit changes</button>
//         </div>

//     </div>  
//   )
// }
