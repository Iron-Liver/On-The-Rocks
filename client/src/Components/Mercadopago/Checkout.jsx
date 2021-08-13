import React, { useEffect } from 'react'

const Checkout = ({ products, data }) => {
  useEffect(() => {
    const script = document.createElement('script');
    
    const attr_data_preference = document.createAttribute('data-preference-id');

    attr_data_preference.value = data.id
  
    script.src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";  
    script.setAttributeNode(attr_data_preference)  
  
    console.log(data)
    
    document.getElementById('form1').appendChild(script);
   },[data])

  return (
    <div>
      <form id='form1'>

        <h4>Checkout</h4>
        <img 
          src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/575X40.jpg" 
          title="Mercado Pago - Medios de pago" alt="Mercado Pago - Medios de pago" 
          width="575" height="40"
        />
        <div>  
          {
            products.map((producto, i) => (
              <div key={i}>
                <ul>
                  <li>{producto.title}</li>
                  <li>{'$' + producto.price}</li> 
                  <li>{producto.quantity}</li>
                </ul>
              </div>   
            ))
          }
        </div>   
      </form>
    </div>
  )
}

export default Checkout
