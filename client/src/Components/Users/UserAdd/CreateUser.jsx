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
			if(aux.includes('llave duplicada')){
				aux.includes('email') ? swal('Lo sentimos!', 'El email ya esta en uso', 'error') : swal('El usuario ya esta en uso', 'Lo sentimos!', 'error')
			}else{
				swal( 'Lo sentimos!', aux, 'error')
			}
		} else {
			typeof(userDetail) !== 'undefined' && swal('Bienvenido!', 'Usuario creado exitosamente',  'success')
			setInput(wipedInput)
			if(Boolean(next)) { console.log('redirigir') }
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
