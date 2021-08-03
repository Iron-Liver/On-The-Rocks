import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CreateCategoryForm from './createCategoryForm'
import {createCategory, clearCategoryReply} from '../../../Redux/Category/categoryActions'

import swal from "sweetalert";

const CreateCategory = (props) => {

	const dispatch = useDispatch();
	const {categoryReply} = useSelector(state => state.categoryReducer);

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
		if(categoryReply === null){
			swal('We are sorry!', 'This category was deleted.', 'error')
		}
		if (categoryReply?.hasOwnProperty('error')) {
			let aux = categoryReply.error.split(',')[0]
			if(aux.includes('llave duplicada')){
				swal('We are sorry!', 'Name already in use', 'error')
			}else{
				swal('We are sorry!', aux, 'error')
			}
		}
        if (categoryReply?.hasOwnProperty('success')) {
            swal('Congratulations!', categoryReply.success , 'success')
            dispatch(clearCategoryReply())
            setInput(wipedInput)
        }
	},
	// eslint-disable-next-line
	[categoryReply])

	return (
		<>
			<CreateCategoryForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateCategory;
