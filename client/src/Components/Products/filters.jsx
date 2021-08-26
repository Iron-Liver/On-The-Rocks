import './filters.css';
import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { ExpandMore } from '@material-ui/icons'
import { getAllCategories } from "../../Redux/Category/categoryActions";
import { useLocation, useHistory } from 'react-router';

const Filters = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleCategory = (name) => {
    query.set('category', name);
    history.push({search: query.toString()})
  };

  const handleOnSale = (e) => {
    if(query.get('onSale')) {
      query.delete('onSale');
      query.delete('page');
      history.push({search: query.toString()});
      return;
    }
    query.set('onSale', "_");
    query.delete('page');
    history.push({search: query.toString()});
  };

  const handlePriceChange = (e) => {
    if(query.get('price')) {
      let filters = JSON.parse(query.get('price'));
      if(filters.some(filter => filter === e.target.name)) {
        filters.splice(filters.indexOf(e.target.name), 1);
        if(!filters.length) {
          query.delete('price');
          return history.push({search: query.toString()});
        }
        
        query.set('price', JSON.stringify(filters));
        history.push({search: query.toString()});
      } else {
        filters.push(e.target.name);
        query.set('price', JSON.stringify(filters));
        history.push({search: query.toString()});
      }
    } else {
      query.set('price', JSON.stringify([e.target.name]))
      history.push({search: query.toString()})
    }
  }

  const handleSizeChange = (e) => {
    if(query.get('size')) {
      let filters = JSON.parse(query.get('size'));
      if(filters.some(filter => filter === e.target.name)) {
        filters.splice(filters.indexOf(e.target.name), 1);
        if(!filters.length) {
          query.delete('size');
          return history.push({search: query.toString()});
        }
        
        query.set('size', JSON.stringify(filters));
        history.push({search: query.toString()});
      } else {
        filters.push(e.target.name);
        query.set('size', JSON.stringify(filters));
        history.push({search: query.toString()});
      }
    } else {
      query.set('size', JSON.stringify([e.target.name]))
      history.push({search: query.toString()})
    }
  }

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ margin: "0 0 3px 0", fontFamily: `"Montserrat", sans-serif`, fontWeight: 400 }}>Filters</h2>
      <div 
        style={{ padding: "10px 0 10px 15px", marginBottom: "3px", cursor: "pointer"}} 
        className={
          query.get('onSale') 
              ? "filter-accordion-details-cat-active" 
              : "filter-accordion-details-cat"
        }
        onClick={handleOnSale}
      >
        <h3 style={{
          margin: 0,
          display: "inline"
        }}>
          ON SALE
        </h3>
      </div>
      <Accordion
        className="filter-accordion"
        elevation={0}
        style={{
          background: "transparent",
          borderTop: "1px solid #1d1813"
        }}
      >
        <AccordionSummary
          className="filter-accordion-summary"
          expandIcon={<ExpandMore />}
        >
          <h3 style={{margin: 0}}>
            PRICE
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <input 
            type="checkbox" 
            checked={
              query.get('price') ?
                JSON.parse(query.get('price')).some(filter => filter === 'U100')
                : false
            } 
            onChange={handlePriceChange}
            name="U100"
            className="check-anon"
          />
          <h4 style={{
            margin: 0,
            fontWeight: 300
          }}>
            Under $100.00
          </h4>
        </AccordionDetails>
        <AccordionDetails>
          <input 
            type="checkbox"
            checked={
              query.get('price') ?
                JSON.parse(query.get('price')).some(filter => filter === 'U250')
                : false
            } 
            onChange={handlePriceChange}
            name="U250"
            className="check-anon"
          />
          <h4 style={{
            margin: 0,
            fontWeight: 300
          }}>
            $100.00 - $250.00
          </h4>
        </AccordionDetails>
        <AccordionDetails>
          <input 
            type="checkbox" 
            checked={
              query.get('price') ?
                JSON.parse(query.get('price')).some(filter => filter === 'U500')
                : false
            } 
            onChange={handlePriceChange}
            name="U500"
            className="check-anon"
          />
          <h4 style={{
            margin: 0,
            fontWeight: 300
          }}>
            $250.00 - $500.00
          </h4>
        </AccordionDetails>
        <AccordionDetails>
          <input
            type="checkbox" 
            checked={
              query.get('price') ?
                JSON.parse(query.get('price')).some(filter => filter === 'A500')
                : false
            } 
            onChange={handlePriceChange}
            name="A500"
            className="check-anon"
          />
          <h4 style={{
            margin: 0,
            fontWeight: 300
          }}>
            Above $500.00
          </h4>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="filter-accordion"
        elevation={0}
        style={{
          background: "transparent",
          borderTop: "1px solid #1d1813"
        }}
      >
        <AccordionSummary 
          className="filter-accordion-summary"
          expandIcon={<ExpandMore />}
        >
          <h3 style={{ margin: 0 }}>
            TYPE  
          </h3>
        </AccordionSummary>
        <AccordionDetails 
          key={Math.random()}
          onClick={() => handleCategory('all')}
          className={
            !query.get('category') || query.get('category') === "all" 
                ? "filter-accordion-details-cat-active" 
                : "filter-accordion-details-cat"
          }
        >
          <h4 style={{ margin: 0 }}>
            All
          </h4>
        </AccordionDetails>
        {categories && 
        categories.map(({ name }) => (
          <AccordionDetails 
            key={Math.random()}
            onClick={() => handleCategory(name)}
            className={
              query.get('category') === name 
                ? "filter-accordion-details-cat-active" 
                : "filter-accordion-details-cat"
            }
          >
            <h4
              style={{
                margin: 0,
              }}
            >
              {name[0].toUpperCase() + name.slice(1)}
            </h4>
          </AccordionDetails>
        ))}
      </Accordion>

      <Accordion
        className="filter-accordion"
        elevation={0}
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
          <input 
            type="checkbox" 
            checked={
              query.get('size') ?
                JSON.parse(query.get('size')).some(filter => filter === 'U200ml')
                : false
            } 
            onChange={handleSizeChange}
            name="U200ml"
            className="check-anon"
          />
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
          <input 
            type="checkbox" 
            checked={
              query.get('size') ?
                JSON.parse(query.get('size')).some(filter => filter === 'U500ml')
                : false
            } 
            onChange={handleSizeChange}
            name="U500ml"
            className="check-anon"
          />
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
          <input 
            type="checkbox" 
            checked={
              query.get('size') ?
                JSON.parse(query.get('size')).some(filter => filter === 'U700ml')
                : false
            } 
            onChange={handleSizeChange}
            name="U700ml"
            className="check-anon"
          />
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
          <input 
            type="checkbox" 
            checked={
              query.get('size') ?
                JSON.parse(query.get('size')).some(filter => filter === 'U750ml')
                : false
            } 
            onChange={handleSizeChange}
            name="U750ml"
            className="check-anon"
          />
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
          <input 
            type="checkbox" 
            checked={
              query.get('size') ?
                JSON.parse(query.get('size')).some(filter => filter === 'A750ml')
                : false
            } 
            onChange={handleSizeChange}
            name="A750ml"
            className="check-anon"
          />
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
