import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CreateProductForm from './createProductForm'
import {createProduct, clearProductDetail} from '../../Redux/Products/productsActions'

import swal from "sweetalert";

const CreateProduct = (props) => {

	const dispatch = useDispatch();
	const {productDetail} = useSelector(state => state.productReducer);

	var wipedInput = {
		name: "",
        description: "",
        size: "",
        brand: "",
        sku: "",
        price: "",
        image: ""
	}

	const [input, setInput] = useState(wipedInput);

	const handleSubmit = e => {
		dispatch(createProduct(input))
	};

	useEffect(() => {
		if(typeof(productDetail) === "string"){
			let aux = productDetail.split(',')[0]
			if(aux.includes('llave duplicada')){
				swal('El nombre ya esta en uso', 'Lo sentimos!', 'error')
			}else{
				swal('We are sorry!', aux, 'error')
			}
		} else {
			if(typeof(productDetail) !== 'undefined') {
				swal('Congratulations!', 'Product successfully created!', 'success')
				dispatch(clearProductDetail())
				setInput(wipedInput)
			}
		}
	},
	// eslint-disable-next-line
	[productDetail])

	return (
		<>
			<CreateProductForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateProduct;
