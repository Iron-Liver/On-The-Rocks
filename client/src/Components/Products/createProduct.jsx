import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CreateProductForm from './createProductForm'
import {createProduct} from '../../Redux/Products/productsActions.js';

import swal from "sweetalert";

const CreateProduct = (props) => {

	const dispatch = useDispatch();
	const {createState} = useSelector(state => state.productReducer);

	var wipedInput = {
		name: "",
		description: "",
		size: "",
		category: "",
		brand: "",
		sku: "",
		price: "",
		image: ""
	}

	const [input, setInput] = useState(wipedInput);

	const handleSubmit = async(e) => {
		dispatch(createProduct(input))
	};

	useEffect(() => {
		if(createState === 'invalid inputs'){
			swal('Invalid input!', 'Error', 'An error has occurred')
		} else if(createState && createState != undefined){
			setInput(wipedInput);
			swal('Congratulations!', 'Product successfully created!', 'Success')	
		}
	},
	// eslint-disable-next-line
	[createState]);

	return (
		<>
			<CreateProductForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateProduct;
