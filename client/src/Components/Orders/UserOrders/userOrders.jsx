import './userOrders.css'
import React, { useState, useEffect } from "react";
import Order from "./order";
import axios from "axios";
import jwt from 'jsonwebtoken'
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Pagination } from '@material-ui/lab';
import Filters from "./filters";

const useStyles = makeStyles((theme) => ({
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const initialFilters = {
  orderBy: "id-DESC-",
  filterBy: {},
  itemsPerPage: 4
};

const UserOrders = () => {
  const [orders, setOrders] = useState({});
  const [form, setForm] = useState(initialFilters);
  const [page, setPage] = useState(1);

  const history = useHistory();
  let { userId } = useParams();
  userId = parseInt(userId);
  const classes = useStyles();


  useEffect(() => {
    (async () => {
      try {
        const localProfile = JSON.parse(localStorage.getItem('token')) ? 
        jwt.verify(JSON.parse(localStorage.getItem('token')), 
        process.env.REACT_APP_SECRET_KEY) : null
        if(localProfile.id !== userId) {
          history.push("/");
        }
        const response = await axios.post("/order/getOrders", {
          ...initialFilters,
          page: 1,
          userId
        });
        setOrders(response.data);
      } catch (error) {
        history.push("/");
      }
    })();
  }, [history, userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/order/getOrders", {
        ...form,
        page: 1,
        userId
      });
      setOrders(response.data);
      setPage(1);
    } catch (error) {
      history.push("/");
    }
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      const obj = {...form.filterBy};
      delete obj[e.target.name];
      setForm({
        ...form,
        filterBy: obj
      });
      return;
    }

    const obj = {...form.filterBy};
    obj[e.target.name] = e.target.value;
    setForm({
      ...form,
      filterBy: obj
    });
  };

  const handleSort = (e) => {
    setForm({
      ...form,
      orderBy: e.target.value
    })
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post("/order/getOrders", {
          ...form,
          page,
          userId
        });
        setOrders(response.data);
      } catch (error) {
        history.push("/"); 
      }
    })()
  //eslint-disable-next-line
  },[page, history, userId])

  const handlePageChange = (e, val) => {
    setPage(val);
  };

  return (
    <div style={{ width: "100%" }}>
      <Filters 
        handleSort={handleSort}
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
        form={form}
      />
      <div className={classes.paginationContainer}>
        <div>
          <Pagination
            count={orders.pages}
            page={page}
            onChange={handlePageChange}
            size="small"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px 0",
          minHeight: "111.3vh"
        }}
      >
        {orders.data &&
          orders.data.map(order => (
            <Order 
              order={order} 
              key={Math.random()}
              handleSubmit={handleSubmit}
            />
          ))
        }
      </div>
      <div className={classes.paginationContainer}>
        <div>
          <Pagination
            count={orders.pages}
            page={page}
            onChange={handlePageChange}
            size="small"
          />
        </div>
      </div>
    </div>
  );
}

export default UserOrders
