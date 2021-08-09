import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CreateProductForm from './createProductForm'
import { createProduct } from '../../Redux/Products/productsActions.js';
import {useStyles} from '../../Components/Products/createProductForm'

import swal from "sweetalert";

const CreateProduct = (props) => {

	const dispatch = useDispatch();
	const { createState } = useSelector(state => state.productReducer);
	const classes = useStyles();


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

	const handleSubmit = async (e) => {
		dispatch(createProduct(input))
	};

	useEffect(() => {
		if (createState && createState[0] === 'invalid inputs') {
			swal('Error', 'invalid inputs', 'error')
		} else if (createState && createState !== undefined) {
			setInput(wipedInput);
			swal('Congratulations!', 'Product successfully created', 'success')
		}
	},
		// eslint-disable-next-line
		[createState]);

	return (
		<>
			<h1 style={{display: 'flex', justifyContent:'center'}}>Create Product</h1>
			<CreateProductForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateProduct;
