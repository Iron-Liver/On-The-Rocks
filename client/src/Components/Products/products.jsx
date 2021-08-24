import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/Products/productsActions";
import "./products.css";
import ProductCard from "./productCard";
import Filters from "./Filters";
import { Pagination } from "@material-ui/lab";

const Products = () => {
    const [page, setPage] = useState(1);
    const { FoundProds } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    useEffect(
        () => {
            window.scrollTo(0, 0);
            dispatch(getProducts());
        },
        // eslint-disable-next-line
        []
    );

    // window.addEventListener("scroll", function () {
    //     let hight = window.innerHeight;
    // });

    return (
        <div className="products-wrapper">
            <div className="page-head">
                <h1 style={{ flexGrow: "1", marginTop: 0 }}>Products</h1>
                <select
                    name=""
                    id=""
                    style={{
                        height: "max-content",
                        background: "#F7F5F3",
                        border: "1px solid black",
                        boxShadow:
                            "1px 1px 1px 0.5px #aaa, -1px -1px 1px 0.5px #ccc",
                        borderRadius: "1px",
                        fontFamily: `"Montserrat"`,
                        fontSize: "18px",
                    }}
                >
                    <option value="">Alphabetically A-Z</option>
                    <option value="">Alphabetically Z-A</option>
                    <option value="">Size More {">"} Less</option>
                    <option value="">Size Less {">"} More</option>
                    <option value="">Price More {">"} Less</option>
                    <option value="">Price Less {">"} More</option>
                </select>
            </div>
            <div className="filters-results">
                <div className="filters">
                    <Filters setPage={setPage} />
                </div>
                <div className="results">
                    <Pagination
                        count={Math.ceil(FoundProds.length / 6)}
                        page={page}
                        onChange={(e, val) => setPage(val)}
                        size="small"
                        style={{
                            margin: "15px 0",
                        }}
                        shape="rounded"
                        color="primary"
                    />
                    <div className="products-content">
                        {FoundProds.map((spirit) => (
                            <ProductCard spirit={spirit} key={Math.random()} />
                        )).slice(page * 6 - 6, page * 6)}
                    </div>
                    <Pagination
                        count={Math.ceil(FoundProds.length / 6)}
                        page={page}
                        onChange={(e, val) => setPage(val)}
                        size="small"
                        style={{
                            position: "relative",
                            zIndex: "999",
                            margin: "15px 0",
                        }}
                        shape="rounded"
                        color="primary"
                    />
                </div>
            </div>
        </div>
    );
};

export default Products;
