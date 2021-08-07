import React, { useState, useEffect } from "react";
import Order from "./order";
import axios from "axios";
import { useHistory } from "react-router";

const initialFilters = {
  orderBy: "id",
  sort: "DESC",
  page: 1,
  itemsPerPage: 2,
  filterBy: {}
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
      setForm({
        ...form,
        page: 1
      })
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


    // let idx = form.filterBy.indexOf(e.target.name);
    // if(e.target.value === "" && idx === -1) return;
    // if(e.target.value === "") {
    //   setForm({
    //     ...form,
    //     filterBy: form.filterBy.filter((param, index) => index !== idx),
    //     filterQuery: form.filterQuery.filter((param, index) => index !== idx),
    //   });
    // } else {
    //   if(idx === -1) {
    //     setForm({
    //       ...form,
    //       filterBy: [...form.filterBy, e.target.name],
    //       filterQuery: [...form.filterQuery, e.target.value]
    //     });
    //   } else {
    //     let newArray = [...form.filterQuery]
    //     newArray[idx] = e.target.value 
    //     setForm({
    //       ...form,
    //       filterQuery: newArray,
    //     });
    //   }
    // }
  };

  useEffect(() => {
    axios
      .post("/order/getAllOrders", form)
      .then((response) => setOrders(response.data))
      .catch((err) => history.push("/"));
  },[form, history])

  const handleBack = () => {
    if(form.page > 1) {
      setForm({
        ...form,
        page: form.page - 1
      }); 
    }
  };

  const handleNext = () => {
    if (form.page < orders.pages) {
      setForm({
        ...form,
        page: form.page + 1,
      });
    }
  }

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
      <button onClick={handleBack}>{"<"}</button>
      <h1 style={{display: "inline"}}>{orders.page}</h1>
      <button onClick={handleNext}>{">"}</button>
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
