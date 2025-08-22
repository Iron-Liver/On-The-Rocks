import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import UpdateCategoryForm from './updateCategoryForm'
import {updateCategory, clearCategoryReply, readCategoryID, deleteCategory} from '../../../Redux/Category/categoryActions'

import swal from "sweetalert";

const UpdateCategory = (props) => {
	const {categoryReply} = useSelector(state => state.categoryReducer);
    const dispatch = useDispatch()
    const {id} = useParams();
    const {categoryDetail} = useSelector(state => state.categoryReducer);

	const wipedInput = {
        name: '',
		description: '',
		image:'',
	}
    
	const [input, setInput] = useState(wipedInput);

    useEffect(()=>{
        async function readCategory() {
            await dispatch(readCategoryID(id))
        }
        readCategory();
    },[dispatch,id]);

    useEffect(() => {
        async function setCategory() {
            await setInput(categoryDetail)
        }
        if(categoryDetail) setCategory();
    },[categoryDetail])
    
	const handleSubmit = e => { 
        dispatch(updateCategory(id,input)) 
	};

    const handleDelete = e => { 
        dispatch(deleteCategory(id))
	};

	useEffect(() => {
		if (categoryReply?.hasOwnProperty('error')) {
			let aux = categoryReply.error.split(',')[0]
			if(aux.includes('llave duplicada')){
				swal('We are sorry!', 'Name already in use', 'error')
			}else{
				swal('We are sorry!', aux, 'error')
			}
			dispatch(clearCategoryReply())
		}
        if (categoryReply?.hasOwnProperty('success')) {
            swal('Congratulations!', categoryReply.success , 'success')
            dispatch(clearCategoryReply())
        }
	},[categoryReply,dispatch]);

	return (
		<>
			<UpdateCategoryForm input={input} setInput={setInput} handleSubmit={handleSubmit} handleDelete={handleDelete} />
		</>
	);
};

export default UpdateCategory;
