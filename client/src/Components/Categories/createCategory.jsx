import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CreateCategoryForm from './createCategoryForm'
import {createCategory, clearCategoryDetail} from '../../Redux/Category/categoryActions'

import swal from "sweetalert";

const CreateCategory = (props) => {

	const dispatch = useDispatch();
	const {categoryDetail} = useSelector(state => state.categoryReducer);

	var wipedInput = {
		name: '',
		description: '',
		image:'',
	}

	const [input, setInput] = useState(wipedInput);

	const handleSubmit = e => {
		dispatch(createCategory(input))
	};

	useEffect(() => {
		if(typeof(categoryDetail) === "string"){
			let aux = categoryDetail.split(',')[0]
			if(aux.includes('llave duplicada')){
				swal('El nombre ya esta en uso', 'Lo sentimos!', 'error')
			}else{
				swal('We are sorry!', aux, 'error')
			}
		} else {
			if(typeof(categoryDetail) !== 'undefined') {
				swal('Categoria creada exitosamente', 'Felicitaciones!', 'success')
				dispatch(clearCategoryDetail())
				setInput(wipedInput)
			}
		}
	},
	// eslint-disable-next-line
	[categoryDetail])

	return (
		<>
			<CreateCategoryForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateCategory;
