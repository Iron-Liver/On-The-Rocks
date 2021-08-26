import React from 'react';
import { makeStyles } from '@material-ui/core';

const colors = {
  main: ["#372c2e", "#ffffff"],
  whitedark: ["#e9e7e6", "#372c2e"],
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
    rounded,
    ...rest
  } = props;
  
  const useStyles = makeStyles({
    customButton: {
      cursor: "pointer",
      borderRadius: rounded ? "50%" : 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
          : "#372c2edd",
      border: "none",
      fontFamily: `"Montserrat", sans-serif`,
      fontWeight: 400,
      color: colors[color] ? colors[color][1] : "white",
      padding: padding || "8px",
      margin: margin || "2px",
      boxShadow: elevation === undefined 
        ? "1px 1px 2px grey, -1px -1px 1px #aaaaaa" 
        : elevation === 0 
          ? ""
          : "1px 1px 2px grey, -1px -1px 1px #aaaaaa",
      transition: "background 200ms ease-in",
      //eslint-disable-next-line
      ['&:hover']: {
        background: colors[color] 
          ? `${colors[color][0]}ee` 
          : color !== undefined 
            ? `${color}ee`
            : "#372c2eee",
        boxShadow: elevation === undefined 
        ? `1px 1px 2px grey, -1px -1px 2px #aaaaaa, 
            1px 1px 2px grey, -1px -1px 2px #aaaaaa` 
        : elevation === 0 
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
            : "#372c2eff",
        boxShadow: elevation === undefined 
        ? `1px 1px 2px grey, -1px -1px 2px #aaaaaa, 
            1px 1px 2px grey, -1px -1px 2px #aaaaaa,
              1px 1px 2px grey, -1px -1px 2px #aaaaaa` 
        : elevation === 0 
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
