import React, { useState, useEffect } from "react";
import Order from "./order";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Pagination } from '@material-ui/lab';

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
        const localProfile = JSON.parse(localStorage.getItem('profile'));
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
    <div style={{ marginRight: 25}}>
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
          orders.data.map(order => (
            <Order 
              order={order} 
              key={Math.random() * 3} 
              userId={userId}
              handleSubmit={handleSubmit}
            />
          ))
        }
      </div>
    </div>
  );
}

export default UserOrders
