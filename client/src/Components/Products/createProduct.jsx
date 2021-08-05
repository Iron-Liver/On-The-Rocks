import { useState } from 'react';
import axios from 'axios';
import CreateProductForm from './createProductForm'

import swal from "sweetalert";

const CreateProduct = (props) => {

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

		await axios.post(`/product/add`, input)
		.then( (res) => {
			if(res.data === 'invalid inputs'){
				swal('Invalid input!', 'Error', 'An error has occurred')
			} else {
				setInput(wipedInput);
				swal('Congratulations!', 'Product successfully created!', 'Success')	
			}		 
		})
	};

	return (
		<>
			<CreateProductForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateProduct;
