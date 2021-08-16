import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct } from '../../Redux/Products/productsActions.js';


const Stock = () => {

    const [quant, setQuant] = useState(1);
    const spirits = useSelector((state) => state.productReducer.FoundProds) 
    const [input, setInput] = useState(0);
    const dispatch = useDispatch();

    if (!spirits) {
        return (<h1>Please wait</h1>)
    }    
 

    const handleChangeQuant = (type) => {
        if (type === '+') {
            setQuant(quant === spirits[0].stock ? spirits[0].stock : quant + 1)
        } else {
            setQuant(quant === 1 ? 1 : quant - 1)
        }
    }
    
    const handleChangeId = async (e) =>{
        setInput(e.target.value)        
    }

    const handleSubmit = async ()=>{
        let updated = {
            "stock": spirits[input].stock - quant
        }
        alert("purchased")              
        dispatch(updateProduct(input,updated))
    } 
    
    const stockActual = spirits.filter(e => e.id === input)
    

    return (
        <div>
            <p>StockActual</p>
            <p>{stockActual[0]?.name}</p>                               
            <p>Product</p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="input"></label>
                <input type="number" id="input" value={input} onChange={handleChangeId}/>
                <button type="submit">Purchase</button>                
            </form>            
            <p>Quantity</p>
            <button onClick={() => handleChangeQuant('-')} >-</button>
            <span>{quant}</span>
            <button onClick={() => handleChangeQuant('+')} >+</button>
            <p></p>            
        </div>
    )
}

export default Stock
