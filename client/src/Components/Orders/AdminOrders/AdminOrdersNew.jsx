import React, { useState, useEffect } from "react";
import OrderNew from "./orderNew";
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

const AdminOrdersNew = () => {
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
          page: 1
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
        page: 1
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
          page
        });
        setOrders(response.data);
      } catch (error) {
        history.push("/"); 
      }
    })()
  //eslint-disable-next-line
  },[page, history])

  const handlePageChange = (e, val) => {
    setPage(val);
  };

  const setOrderStatus = (status, id) => {
    const order = orders.data.find(order => order.id === id);
    const orderIndex = orders.data.findIndex(order => order.id === id);
    order.status = status;

    const newData = [...orders.data];
    newData[orderIndex] = order;

    setOrders({
      ...orders,
      data: newData
    })
  };

  return (
    <main style={{ width: "100%" }}>
      <header>
        <Filters 
          handleSort={handleSort}
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          form={form}
        />
      </header>
        <nav className={classes.paginationContainer}>
          <Pagination
            count={orders.pages}
            page={page}
            onChange={handlePageChange}
            size="small"
          />
        </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px 0",
          minHeight: "83.6vh"
        }}
      >
        {orders.data &&
          orders.data.map(order => (
            <OrderNew 
              order={order} 
              key={Math.random()}
              handleSubmit={handleSubmit}
              setOrderStatus={setOrderStatus}
            />
          ))
        }
      </div>
      <nav className={classes.paginationContainer}>
        <Pagination
          count={orders.pages}
          page={page}
          onChange={handlePageChange}
          size="small"
        />
      </nav>
    </main>
  );
}

export default AdminOrdersNew