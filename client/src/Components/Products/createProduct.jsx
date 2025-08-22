import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CreateProductForm from './createProductForm'
import { createProduct, clearState } from '../../Redux/Products/productsActions.js';

import swal from "sweetalert";

const CreateProduct = (props) => {

	const dispatch = useDispatch();
	const { createState } = useSelector(state => state.productReducer);

	var wipedInput = {
		name: "",
		description: "",
		size: "",
		categories: [],
		brand: "",
		sku: "",
		price: "",
		stock: 0, 
		image: "",
	}

	const [input, setInput] = useState(wipedInput);

	const handleSubmit = async (e) => {
		dispatch(createProduct(input))
	};

	useEffect(() => {
		if (createState && createState !== undefined && createState.name) {
			setInput(wipedInput);
			dispatch(clearState())
			swal('Congratulations!', 'Product successfully created', 'success')
		}
		if (createState && createState[0] === 'invalid inputs') {
			dispatch(clearState())
			swal('Error', 'invalid inputs', 'error')
		}
	},
		// eslint-disable-next-line
		[createState, dispatch]);

	return (
		<>
			<CreateProductForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateProduct;
