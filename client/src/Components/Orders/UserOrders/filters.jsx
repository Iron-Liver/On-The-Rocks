import './filters.css'
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

import { ExpandMore } from '@material-ui/icons'
import CustomButton from '../../Button/CustomButton';

const Filters = ({ handleSubmit, handleChange, handleSort, handleReset, form }) => {
  return (
    <div className="user-orders-filter-container">
      <form onSubmit={handleSubmit} className="user-orders-filter-form">
        <Accordion
          className="filter-accordion"
          elevation={0}
          style={{
            background: "transparent"
          }}
        >
          <AccordionSummary
            className="filter-accordion-summary"
            expandIcon={<ExpandMore />}
          >
            <h4
              style={{
                margin: 0,
                fontWeight: 300
              }}
            >
              Basic filters
            </h4>
          </AccordionSummary>
          <AccordionDetails style={{ margin: 0, padding: 0 }}>
          <input
              type="text"
              placeholder="First name"
              name="firstName"
              onChange={handleChange}
              value={form.filterBy.firstName || ""}
              className="user-order-filter-input"
          />
          </AccordionDetails>
          <AccordionDetails style={{ margin: 0, padding: 0 }}>
          <input
              type="text"
              placeholder="Total"
              name="total"
              onChange={handleChange}
              value={form.filterBy.total || ""}
              className="user-order-filter-input"
            />
          </AccordionDetails>
          <AccordionDetails style={{ margin: 0, padding: 0 }}>
            <label htmlFor="status">
              <select
                id="status"
                name="status"
                defaultValue=""
                onChange={handleChange}
                className="user-order-filter-input"
              >
                <option value="">
                  Status
                </option>
                <option value="pending">Pending</option>
                <option value="created">Created</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </label>
          </AccordionDetails>
        </Accordion>
        
        <Accordion
          className="filter-accordion"
          elevation={0}
          style={{
            background: "transparent"
          }}
        >
          <AccordionSummary
            className="filter-accordion-summary"
            expandIcon={<ExpandMore />}
          >
            <h4
              style={{
                margin: 0,
                fontWeight: 300
              }}
            >
              Advanced filters
            </h4>
          </AccordionSummary>
          <AccordionDetails style={{ margin: 0, padding: 0 }}>
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              onChange={handleChange}
              value={form.filterBy.lastName || ""}
              className="user-order-filter-input"
            />
          </AccordionDetails>
          <AccordionDetails style={{ margin: 0, padding: 0 }}>
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleChange}
              value={form.filterBy.address || ""}
              className="user-order-filter-input"
            />
          </AccordionDetails>
          <AccordionDetails style={{ margin: 0, padding: 0 }}>
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={handleChange}
              value={form.filterBy.city || ""}
              className="user-order-filter-input"
            />
          </AccordionDetails>
        </Accordion>
        <div className="user-orders-sort-submit">
          <label htmlFor="status-sort"> Sort By:
            <select
              id="status-sort"
              name="status-sort"
              value={form.orderBy}
              onChange={handleSort}
              className="user-order-filter-input"
            >
              <option value="id-DESC-">Order ID Desc</option>
              <option value="id-ASC">Order ID Asc</option>
              <option value="date-DESC">Date Desc</option>
              <option value="date-ASC">Date Asc</option>
              <option value="total-DESC">Total Desc</option>
              <option value="total-ASC">Total Asc</option>
              <option value="firstName-DESC">First Name Desc</option>
              <option value="firstName-ASC">First Name Asc</option>
            </select>
          </label>
          <div>
            <CustomButton
              type="button"
              margin= "5px 10px 0 0"
              style={{  }}
              onClick={handleReset}
            >
              RESET
            </CustomButton>
            <CustomButton 
              type="submit"
              margin= "5px 10px 0 0"
              style={{ alignSelf: "flex-end" }}
            >
              FILTER
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Filters
