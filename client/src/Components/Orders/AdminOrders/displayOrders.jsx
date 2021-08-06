import React, { useState, useEffect } from "react";
import Order from "./order";
import axios from "axios";
import { useHistory } from "react-router";

const initialFilters = {
  orderBy: "id",
  sort: "DESC",
  page: 2,
  itemsPerPage: 3,
  filterBy: [],
  filterQuery: [],
};

const DisplayOrders = () => {
  const [orders, setOrders] = useState({});
  const [form, setForm] = useState(initialFilters);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post("/order/getAllOrders", initialFilters);
        setOrders(response.data);
      } catch (error) {
        history.push("/");
      }
    })();
  }, [history]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/order/getAllOrders", form);
      setOrders(response.data);
    } catch (error) {
      history.push("/");
    }
  };

  const handleChange = (e) => {
    let idx = form.filterBy.indexOf(e.target.name);
    if(e.target.value === "" && idx === -1) return;
    if(e.target.value === "") {
      setForm({
        ...form,
        filterBy: form.filterBy.filter((param, index) => index !== idx),
        filterQuery: form.filterQuery.filter((param, index) => index !== idx),
      });
    } else {
      if(idx === -1) {
        setForm({
          ...form,
          filterBy: [...form.filterBy, e.target.name],
          filterQuery: [...form.filterQuery, e.target.value]
        });
      } else {
        let newArray = [...form.filterQuery]
        newArray[idx] = e.target.value 
        setForm({
          ...form,
          filterQuery: newArray,
        });
      }
    }
  };

  return (
    <>
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
      <h1>{orders.page}</h1>
      <h1>{orders.pages}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {orders.data &&
          orders.data.map((order, idx) => <Order order={order} key={idx} />)}
      </div>
    </>
  );
}

export default DisplayOrders
