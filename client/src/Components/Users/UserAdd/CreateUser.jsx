import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {useLocation} from 'react-router-dom'
import CreateUserForm from './CreateUserForm'
import {createUser} from '../../../Redux/Users/UserActions'

import swal from "sweetalert";

const CreateUser = (props) => {

	const search = useLocation().search;
	const next = new URLSearchParams(search).get('next');

	const dispatch = useDispatch();
	const {userDetail} = useSelector(state => state.userReducer);

	var wipedInput = {
		name: '',
		username: '',
		email:'',
		password: '',
		contact: ''
	}

	const [input, setInput] = useState(wipedInput);

	const handleSubmit = e => {
		dispatch(createUser(input))
	};

	useEffect(() => {
		if(typeof(userDetail) === "string"){
			let aux = userDetail.split(',')[0]
			if(aux.includes('duplicated key')){
				aux.includes('email') ? swal('We are sorry!', 'The email is already in use', 'error') : swal('The user is already in use', 'We are sorry!', 'error')
			}else{
				swal( 'We are sorry!', aux, 'error')
			}
		} else {
			typeof(userDetail) !== 'undefined' && swal('Welcome!', 'User created successfully',  'success')
			setInput(wipedInput)
			if(Boolean(next)) { console.log('redirect') }
		}
	},
	// eslint-disable-next-line
	[userDetail])

	return (
		<>
			<CreateUserForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateUser;