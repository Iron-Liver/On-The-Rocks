import './userOrders.css'
import React, { useState, useEffect } from "react";
import Order from "./order";
import axios from "axios";
import jwt from 'jsonwebtoken'
import { useLocation, useParams } from "react-router-dom";
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

const UserOrders = () => {
  const { search, pathname } = useLocation();
  const query = new URLSearchParams(search);
  
  const initialFilters = {
    order: query?.get('order') ? query?.get('order').toString() : "id-DESC-",
    filterBy: {},
    limit: query?.get('limit') ? parseInt(query?.get('limit').toString()) : 4
  };

  (() => {
    for(const entry of query.entries()) {
      if(!["page", "order", "limit"].includes(entry[0])) {
        initialFilters.filterBy[entry[0]] = entry[1];
      };
    }
  })()

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

        const body = {
          orderBy: query?.get('order') 
            ? query.get('order').toString()
            : "id-DESC",
          page: query?.get('page')
            ? parseInt(query.get('page').toString()) || 1
            : 1,
          itemsPerPage: query?.get('limit')
            ? parseInt(query.get('limit').toString()) || 4
            : 4,
          filterBy: {},
          userId
        }

        
        for(const entry of query.entries()) {
          if(!body[entry[0]]) {
            body.filterBy[entry[0]] = entry[1];
          };
        }
        
        const response = await axios.post("/order/getOrders", body);
        setPage(response.data.page)
        setOrders(response.data);
      } catch (error) {
        history.push("/");
      }
    })();
    //eslint-disable-next-line
  }, [history, userId, search])

  const handleSubmit = async (e) => {
    e.preventDefault();

    query.forEach((_value, key) => {
      query.delete(key);
    })
    
    Object.entries(form.filterBy).forEach(param => {
      query.set(param[0], param[1])
    });

    if(form.order !== "id-DESC-") {
      query.set('order', form.order);
    }

    if(form.limit !== 4) {
      query.set('limit', form.limit)
    }

    query.set('page', 1)

    history.push({search: query.toString()});
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

  const handleReset = () => {
    setForm({ 
      order: "id-DESC-",
      filterBy: {},
      limit: 4
    })
    history.push(`${pathname}?page=${page}`);
  }

  const handleSort = (e) => {
    setForm({
      ...form,
      order: e.target.value
    })
  };

  const handleLimitChange = (e) => {
    query.set('limit', e.target.value);
    setForm({
      ...form,
      limit: e.target.value
    })
    history.push({ search: query.toString() })
  }

  const handlePageChange = (_e, val) => {
    setPage(val);
    query.set('page', val);
    history.push({search: query.toString()})
  };

  return (
    <div className="user-orders-tab-container">
      <div style={{ width: "100%" }}>
        <Filters 
          handleSort={handleSort}
          handleSubmit={handleSubmit} 
          handleChange={handleChange}
          handleReset={handleReset}
          form={form}
        />
        <div className={classes.paginationContainer}>
          <div className="user-pagination-pos">
            <div style={{width: "152px"}}/>
            <Pagination
              count={orders.pages}
              page={page}
              onChange={handlePageChange}
              size="small"
            />
            <div>
            <label htmlFor="limit" className="user-orders-item-limit">
              per page:
              <select 
                name="limit" 
                value={form.limit} 
                onChange={handleLimitChange}
              >
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
              </select>
            </label>
            </div>
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
    </div>
  );
}

export default UserOrders
