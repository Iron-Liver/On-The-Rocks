import './filters.css';
import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategory,
} from "../../Redux/Products/productsActions";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMore } from '@material-ui/icons'
import { getAllCategories } from "../../Redux/Category/categoryActions";

const Filters = ({ setPage }) => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  function handleSelect(id) {
    setPage(1);
    console.log(id)
    dispatch(filterByCategory(id));
  }

  //------------------------------------

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ marginTop: 0 }}>Filters</h2>

      <Accordion
        className="filter-accordion"
        elevation={false}
        style={{
          background: "transparent",
          borderTop: "1px solid #1d1813"
        }}
      >
        <AccordionSummary
          className="filter-accordion-summary"
          expandIcon={<ExpandMore />}
        >
          <h3
            style={{
              margin: 0,
            }}
          >
            PRICE
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <input type="checkbox" />
          <h4
            style={{
              margin: 0,
              fontWeight: 300
            }}
          >
            Under $100.00
          </h4>
        </AccordionDetails>
        <AccordionDetails>
          <input type="checkbox" />
          <h4
            style={{
              margin: 0,
              fontWeight: 300
            }}
          >
            $100.00 - $250.00
          </h4>
        </AccordionDetails>
        <AccordionDetails>
          <input type="checkbox" />
          <h4
            style={{
              margin: 0,
              fontWeight: 300
            }}
          >
            $250.00 - $500.00
          </h4>
        </AccordionDetails>
        <AccordionDetails>
          <input type="checkbox" />
          <h4
            style={{
              margin: 0,
              fontWeight: 300
            }}
          >
            Above $500.00
          </h4>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="filter-accordion"
        elevation={false}
        style={{
          background: "transparent",
          borderTop: "1px solid #1d1813"
        }}
      >
        <AccordionSummary 
          className="filter-accordion-summary"
          expandIcon={<ExpandMore />}
        >
          <h3
            style={{
              margin: 0,
            }}
          >
            TYPE
          </h3>
        </AccordionSummary>
        <AccordionDetails 
          key={Math.random()}
          onClick={() => handleSelect('all')}
          className="filter-accordion-details-cat"
        >
          <h4
            style={{
              margin: 0,
            }}
          >
            All
          </h4>
        </AccordionDetails>
        {categories && 
        categories.map(({ name, id }) => (
          <AccordionDetails 
            key={Math.random()}
            onClick={() => handleSelect(id)}
            className="filter-accordion-details-cat"
          >
            <h4
              style={{
                margin: 0,
              }}
            >
              {name}
            </h4>
          </AccordionDetails>
        ))}
      </Accordion>

      <Accordion
        className="filter-accordion"
        elevation={false}
        style={{
          background: "transparent",
          borderTop: "1px solid #1d1813"
        }}
      >
        <AccordionSummary
          className="filter-accordion-summary"
          expandIcon={<ExpandMore />}
        >
          <h3
            style={{
              margin: 0,
            }}
          >
            SIZE
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <input type="checkbox" />
          <h4
            style={{
              margin: 0,
              fontWeight: 300
            }}
          >
            200ml and less
          </h4>
        </AccordionDetails>
        <AccordionDetails>
          <input type="checkbox" />
          <h4
            style={{
              margin: 0,
              fontWeight: 300
            }}
          >
            200ml - 500ml
          </h4>
        </AccordionDetails>
        <AccordionDetails>
          <input type="checkbox" />
          <h4
            style={{
              margin: 0,
              fontWeight: 300
            }}
          >
            500ml - 700ml
          </h4>
        </AccordionDetails>
        <AccordionDetails>
          <input type="checkbox" />
          <h4
            style={{
              margin: 0,
              fontWeight: 300
            }}
          >
            700 - 750ml
          </h4>
        </AccordionDetails>
        <AccordionDetails>
          <input type="checkbox" />
          <h4
            style={{
              margin: 0,
              fontWeight: 300
            }}
          >
            Above 750ml
          </h4>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filters;

// <FormControl component="fieldset">
//     <h4>Order By Category</h4>
//     <RadioGroup className={classes.form} aria-label="gender" name="category" onChange={handleSelect}>
//         <FormControlLabel value="Vodka" control={<Radio />} label="Vodka" />
//         <FormControlLabel value="Tequila" control={<Radio />} label="Tequila" />
//         <FormControlLabel value="Whisky" control={<Radio />} label="Whisky" />
//         <FormControlLabel value="Gin" control={<Radio />} label="Gin" />
//         <FormControlLabel value="Liqueur" control={<Radio />} label="Liqueur" />
//         <FormControlLabel value="Brandy" control={<Radio />} label="Brandy" />
//     </RadioGroup>
// </FormControl>