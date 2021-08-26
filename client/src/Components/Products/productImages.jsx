import React, { useState } from "react";
// import "./productImages.css";
import Axios from "axios";
import swal from "sweetalert"

function ProductImages({ sku, name }) {
  // eslint-disable-next-line
  const [state, setState] = useState();
  console.log("skuname", sku, name)

  function handleChange(file){

    if(sku.length > 0){
      console.log("skuname2", sku, name)
      setState({sku: sku, name:name})

      const data = new FormData();
      for (const aFile of file) {
        data.append("file", aFile)
      }
      for(const a of data){
        console.log(a)
      }
      Axios.post(`/product/addPhotos/${name}?sku=${sku}`, data)
        .then(res => console.log(res))
        .catch(err => console.log(err)); 
    }else{
      swal("Please insert a valid SKU")
    }
  };
  


 
  return (
    <div className="App">
      <header className="App-header">
        <form action="#">
          <div className="flex">
            <label className="product-input" htmlFor="file">File</label>
            <input
              className="product-input"
              type="file"
              id="file"
              accept=".jpg"
              multiple
              onChange={event => {
                handleChange(event.target.files)
              }}
            />
          </div>
        </form>
      </header>
    </div>
  );
}

export default ProductImages;