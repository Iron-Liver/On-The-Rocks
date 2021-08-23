import React from 'react';
import { makeStyles } from '@material-ui/core';

const colors = {
  main: ["#3b3024", "#ffffff"],
  whitedark: ["#e9e7e6", "#3b3024"],
  white: ["#ffffff", "#000000"],
  black: ["#000000", "#ffffff"]
}

const CustomButton = (props) => {
  let {
    height,
    width,
    inner,
    elevation,
    margin,
    padding,
    children,
    color,
    ...rest
  } = props;
  
  const useStyles = makeStyles({
    customButton: {
      cursor: "pointer",
      height: height === undefined 
        ? "" 
        : height,
      width: width === undefined 
      ? "" 
      : width,
      background: colors[color] 
        ? `${colors[color][0]}dd` 
        : color !== undefined 
          ? `${color}dd`
          : "#3b3024dd",
      border: "none",
      fontFamily: `"Montserrat", sans-serif`,
      fontWeight: 400,
      color: colors[color] ? colors[color][1] : "white",
      padding: padding || "8px",
      margin: margin || "2px",
      boxShadow: elevation === undefined 
        ? "1px 1px 2px grey, -1px -1px 1px #aaaaaa" 
        : elevation === false 
          ? ""
          : "1px 1px 2px grey, -1px -1px 1px #aaaaaa",
      transition: "background 200ms ease-in",
      //eslint-disable-next-line
      ['&:hover']: {
        background: colors[color] 
          ? `${colors[color][0]}ee` 
          : color !== undefined 
            ? `${color}ee`
            : "#3b3024ee",
        boxShadow: elevation === undefined 
        ? `1px 1px 2px grey, -1px -1px 2px #aaaaaa, 
            1px 1px 2px grey, -1px -1px 2px #aaaaaa` 
        : elevation === false 
          ? ""
          : `1px 1px 2px grey, -1px -1px 2px #aaaaaa, 
              1px 1px 2px grey, -1px -1px 2px #aaaaaa`
      },
      //eslint-disable-next-line
      ['&:active']: {
        background: colors[color] 
          ? `${colors[color][0]}ff` 
          : color !== undefined 
            ? `${color}ff`
            : "#3b3024ff",
        boxShadow: elevation === undefined 
        ? `1px 1px 2px grey, -1px -1px 2px #aaaaaa, 
            1px 1px 2px grey, -1px -1px 2px #aaaaaa,
              1px 1px 2px grey, -1px -1px 2px #aaaaaa` 
        : elevation === false 
          ? ""
          : `1px 1px 2px grey, -1px -1px 2px #aaaaaa, 
              1px 1px 2px grey, -1px -1px 2px #aaaaaa,
                1px 1px 2px grey, -1px -1px 2px #aaaaaa`
      }
    }
  })

  const classes = useStyles();

  return (
    <button 
      className={classes.customButton}
      {...rest}
    >
      {children ? children : inner}
    </button>
  )
}

export default CustomButton
