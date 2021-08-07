import React, { useState, useEffect } from "react";
import Order from "./order";
import axios from "axios";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
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
  orderBy: "id",
  sort: "DESC",
  filterBy: {},
  itemsPerPage: 2
};

const DisplayOrders = () => {
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
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Total"
            name="total"
            onChange={handleChange}
          />
          <label htmlFor="status">
            <select
              id="status"
              name="status"
              defaultValue=""
              onChange={handleChange}
            >
              <option value="" hidden="hidden">
                Status
              </option>
              <option value="created">Created</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </label>
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

export default DisplayOrders
