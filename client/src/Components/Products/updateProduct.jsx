import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CreateProductForm from './createProductForm'
import { updateProduct } from '../../Redux/Products/productsActions.js';
import { useStyles } from '../../Components/Products/createProductForm'
import swal from "sweetalert";

const UpdateProduct = ({ match }) => {

    const dispatch = useDispatch();
    const { updateState } = useSelector(state => state.productReducer);
    const classes = useStyles();
    const id = match.params.id

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
        const updated = {};
        for (const prop in input) {
            if (input[prop] !== '') {
                updated[prop] = input[prop];
            }
        };
       // if (Object.keys(updated).length > 0) {
            dispatch(updateProduct(id, updated))
       // }
    };
    
    useEffect(() => {
        if (updateState && updateState[0] === 'invalid inputs') {
            swal('Error', 'invalid inputs', 'error')
        } else if (updateState && updateState[0] == '0 product/s updated') {
            swal('Error', 'invalid inputs', 'error')
        } else if (updateState && updateState !== undefined) {
            setInput(wipedInput);
            swal('Congratulations!', 'Product successfully created', 'success')
        }
    },
        // eslint-disable-next-line
        [updateState]);

    return (
        <>
            <h1 className={classes.title}>Update Product</h1>
            <CreateProductForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
        </>
    );
};

export default UpdateProduct;