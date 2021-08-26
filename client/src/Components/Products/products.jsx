import React, { useEffect, useState } from "react";
import "./products.css";
import ProductCard from "./productCard";
import Filters from "./filters";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Products = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState({});
    const history = useHistory();
    const [limit, setLimit] = useState(query?.get('limit')
    ? parseInt(query.get('limit').toString()) || 6
    : 6)

    useEffect(() => {
      (async () => {
        window.scrollTo(0, 0);
        const body = {
          orderBy: query?.get('order') 
            ? query.get('order').toString()
            : "id-DESC",
          page: query?.get('page')
            ? parseInt(query.get('page').toString()) || 1
            : 1,
          itemsPerPage: query?.get('limit')
            ? parseInt(query.get('limit').toString()) || 6
            : 6,
          filterBy: {}
        }

        for(const entry of query.entries()) {
          if(!body[entry[0]]) {
            body.filterBy[entry[0]] = entry[1];
          };
        }
        try {
          const response = await axios.post("/product", body);
          setPage(response.data.page)
          setProducts(response.data);
        } catch (error) {
          history.push("/");
        }
      })()
      //eslint-disable-next-line
    },[history, search]);

    const handlePageChange = (_e, val) => {
      setPage(val);
      query.set('page', val);
      history.push({search: query.toString()})
    };

    const handleSortChange = (e) => {
      if(!e.target.value) {
        query.delete('order');
        history.push(query);
        return;
      }
      query.set('order', e.target.value);
      history.push({search: query.toString()})
    }

    const handleLimitChange = (e) => {
      setLimit(e.target.value)
      query.set('limit', e.target.value);
      history.push({search: query.toString()})
    }

    return (
      <div className="products-wrapper">
        <div className="page-head">
          <h1 style={{ flexGrow: "1", margin: "0 4px 0 0"}}>Products</h1>
            <select
              defaultValue=""
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
              onChange={handleSortChange}
            >
                <option value="">
                    Sort
                </option>
                <option value="size-DESC">Size More {">"} Less</option>
                <option value="size-ASC">Size Less {">"} More</option>
                <option value="price-DESC">Price More {">"} Less</option>
                <option value="price-ASC">Price Less {">"} More</option>
            </select>
          </div>
            <div className="filters-results">
                <div className="filters">
                    <Filters setPage={setPage} />
                </div>
                <div className="results">
                    <div className="products-pagination-container">
                      <div className="pp-container"/>
                      <Pagination
                          count={products && products.pages}
                          page={page}
                          onChange={handlePageChange}
                          size="small"
                          style={{
                            margin: "15px 0",
                          }}
                          shape="rounded"
                          color="primary"
                      />
                      <div className="pp-container">
                        <label htmlFor="limit" className="user-orders-item-limit">
                        per page:
                          <select 
                            name="limit" 
                            defaultValue={limit} 
                            onChange={handleLimitChange}
                          >
                            <option value={6}>6</option>
                            <option value={12}>12</option>
                            <option value={18}>18</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <div className="products-content">
                        {products && Object.keys(products).length ? (
                          products.total !== 0 ? (
                            products.data.map((spirit) => (
                              <ProductCard spirit={spirit} key={Math.random()} />
                            ))
                          ) : (
                            <h4>No results found</h4>
                          )
                        ) : (
                          <div>
                            <CircularProgress />
                          </div>
                        )}
                    </div>
                    <Pagination
                        count={products && products.pages}
                        page={page}
                        onChange={handlePageChange}
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
      