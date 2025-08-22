import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import UpdateProductForm from './updateProductForm';
import { deleteProduct, updateProduct, clearState } from '../../Redux/Products/productsActions.js';
import swal from "sweetalert";

const UpdateProduct = ({ match }) => {

    const dispatch = useDispatch();
    const { updateState } = useSelector(state => state.productReducer);
    const { Products } = useSelector(state => state.productReducer);
    const id = match.params.id

    var wipedInput = {
        name: "",
        description: "",
        size: "",
        categories: [],
        brand: "",
        sku: "",
        price: "",
        image: "",
        stock: ""
    }

    const [input, setInput] = useState(wipedInput);

    const handleSubmit = async (e) => {
        const updated = {};
        for (const prop in input) {
            if (input[prop] !== '') {
                updated[prop] = input[prop];
            }
        };
        dispatch(updateProduct(id, updated))
    };
    useEffect(() => {
        async function setProduct() {
            let product = Products?.filter(e => e.id === Number(id))
            let categoriesId = product[0].categories?.map( cat => cat.id)
            product[0].categories = categoriesId;
            await setInput(product[0])
        }
        if (Products) setProduct();
    }, [Products, id])


    const handleDelete = async e => {
        dispatch(deleteProduct(id));
        swal('Congratulations!', 'Product successfully deleted' , 'success')
    }

    useEffect(() => {
        if (updateState !== undefined) {
            if (updateState && updateState[0] === 'invalid inputs') {
                swal('Error', 'invalid inputs', 'error')
                dispatch(clearState())

            } else if (updateState && updateState[0] === '0 product/s updated') {
                swal('Error', 'invalid inputs', 'error')
                dispatch(clearState())

            }
            if (updateState && updateState[0] !== undefined) {
                setInput(wipedInput);
                dispatch(clearState())
                swal('Congratulations!', 'Product successfully updated', 'success')
            }
        }
    },
        // eslint-disable-next-line
        [updateState]);

    return (
        <>
            <UpdateProductForm input={input} setInput={setInput} id={id} handleSubmit={handleSubmit} handleDelete={handleDelete} />
        </>
    );
};

export default UpdateProduct;