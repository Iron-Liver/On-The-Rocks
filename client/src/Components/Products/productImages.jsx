import React, { useState } from "react";
import "./productImages.css";
import Axios from "axios";

function ProductImages({ sku }) {
  //const [name, setName] = useState();
  const [file, setFile] = useState();

  const send = event => {
    const data = new FormData();

    for (const aFile of file) {
      data.append('file', aFile)
      aFile.sku = sku
    }

    for (var p of data) {
      console.log(p);
    }

    console.log(sku)
    console.log('file out', file)
    /* Axios.post("/product/addPhotos", data)
      .then(res => console.log(res))
      .catch(err => console.log(err)); */
  };
  console.log('file', file)
  return (
    <div className="App">
      <header className="App-header">
        <form action="#">
          <div className="flex">
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="file"
              accept=".jpg"
              multiple
              onChange={event => {
                const file = event.target.files;
                setFile(file);
              }}
            />
          </div>
        </form>
        <button onClick={send}>Send</button>
      </header>
    </div>
  );
}

export default ProductImages;