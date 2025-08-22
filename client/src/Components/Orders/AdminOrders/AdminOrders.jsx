import React, { useState, useEffect } from "react";
import Order from "./order";
import axios from "axios";
import { useHistory } from "react-router";
import { FormControl, NativeSelect } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { Pagination } from '@mui/material';
import theme from "../../../Utils/theme";

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

const AdminOrders = () => {
  const [orders, setOrders] = useState({});
  const [form, setForm] = useState(initialFilters);
  const [page, setPage] = useState(1);

  const history = useHistory();

  const classes = useStyles(theme);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post("/order/getOrders", {
          ...initialFilters,
          page: 1
        });
        setOrders(response.data);
      } catch (error) {
        history.push("/");
      }
    })();
  }, [history]);

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

  const handleFilterChange = (e) => {
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

  const handleSortChange = (e) => {
    setForm({
      ...form,
      orderBy: e.target.value
    })
  };

  useEffect(() => {
    axios
      .post("/order/getOrders", {
        ...form,
        page
      })
      .then((response) => setOrders(response.data))
      .catch((err) => history.push("/"));
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
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handleFilterChange}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={handleFilterChange}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleFilterChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={handleFilterChange}
          />
          <input
            type="text"
            placeholder="Total"
            name="total"
            onChange={handleFilterChange}
          />
          <FormControl className={classes.formControl}>
            <NativeSelect
              className={classes.selectEmpty}
              defaultValue=""
              name="status"
              onChange={handleFilterChange}
              inputProps={{ 'aria-label': 'status' }}
            >
              <option value="">
                Status
              </option>
              <option value="created">Created</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.formControl}>
            <NativeSelect
              className={classes.selectEmpty}
              value={form.orderBy}
              name="sort"
              onChange={handleSortChange}
              inputProps={{ 'aria-label': 'sort' }}
            >
              <option value="id-DESC-" disabled>
                Sort
              </option>
                <option value="id-DESC">Order ID Desc</option>
                <option value="id-ASC">Order ID Asc</option>
                <option value="createdAt-DESC">Date Desc</option>
                <option value="createdAt-ASC">Date Asc</option>
                <option value="total-DESC">Total Desc</option>
                <option value="total-ASC">Total Asc</option>
                <option value="firstName-DESC">First Name Desc</option>
                <option value="firstName-ASC">First Name Asc</option>
            </NativeSelect>
          </FormControl>
          <input type="submit" value="Filter"/>
        </form>
      </div>
      <div className={classes.paginationContainer}>
        <div>
          <Pagination
            count={orders.pages}
            page={page}
            onChange={handlePageChange}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {orders.data &&
          orders.data.map((order, idx) => (
            <Order order={order} key={Math.random() * 100} setOrderStatus={setOrderStatus}/>
          ))}
      </div>
    </div>
  );
}

export default AdminOrders
