import React, { useState } from "react";
// import "./productImages.css";
import Axios from "axios";
import swal from "sweetalert";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
function ProductImages({ sku, name }) {
    // eslint-disable-next-line
    const [state, setState] = useState();

    const hiddenFileInput = React.useRef(null);

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    async function handleChange(file) {
        if (sku.length > 0) {
            setState({ sku: sku, name: name });
            const data = new FormData();
            for (const aFile of file) {
                data.append("file", aFile);
            }
            try {
              await Axios.post(`/product/addPhotos/${name}?sku=${sku}`, data)
            }catch (e) {
              console.log(e)
            }
        } else {
            swal("Please insert a valid SKU");
        }
    }

    return (
        <div className="App">
            <div className="flex">
                <Button
                    style={{margin: '20px', width: '80%'}}
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    onClick={handleClick}>
                    Upload
                </Button>
                <input
                    style={{ display: "none" }}
                    ref={hiddenFileInput}
                    type="file"
                    id="file"
                    accept=".jpg"
                    multiple
                    onChange={(event) => {
                        handleChange(event.target.files);
                    }}
                />
            </div>
        </div>
    );
}

export default ProductImages;
