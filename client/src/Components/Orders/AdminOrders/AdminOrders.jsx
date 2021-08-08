import React, { useState, useEffect } from "react";
import Order from "./order";
import axios from "axios";
import { useHistory } from "react-router";
import { makeStyles, FormControl, NativeSelect } from "@material-ui/core";
import { Pagination } from '@material-ui/lab';
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
  itemsPerPage: 2
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
  },[page, history])

  const handlePageChange = (e, val) => {
    setPage(val);
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
              <option value="" hidden="hidden">
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
              {/* <option value="" hidden="hidden">
                Sort
              </option>
              <optgroup label="Order ID">
                <option value="id-DESC">Order ID Desc</option>
                <option value="id-ASC">Order ID Asc</option>
              </optgroup>
              <optgroup label="Date">
                <option value="createdAt-DESC">Date Desc</option>
                <option value="createdAt-ASC">Date Asc</option>
              </optgroup>
              <optgroup label="Total">
                <option value="total-DESC">Total Desc</option>
                <option value="total-ASC">Total Asc</option>
              </optgroup>
              <optgroup label="First Name">
                <option value="firstName-DESC">First Name Desc</option>
                <option value="firstName-ASC">First Name Asc</option>
              </optgroup>
            </select>
          </label> */}
          <input type="submit" />
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
            <Order order={order} key={Math.random() * 100} />
          ))}
      </div>
    </div>
  );
}

export default AdminOrders
