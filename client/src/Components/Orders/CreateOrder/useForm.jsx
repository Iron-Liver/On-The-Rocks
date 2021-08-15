import React from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/styles'


export function useForm({initialForm2, initialForm1}) {
  const [state1, setState1] = useState(initialForm1);
  const [state2, setState2] = useState(initialForm2);
  

  const handleInputChange1 = ( e ) => {
    const  { name, value } = e.target;
    
    setState1({
      ...state1,
      [name]: value
    });
  }
  const handleInputChange2 = ( e ) => {
    const  { name, value } = e.target;
    setState2({
      ...state2,
      [name]: value
    });
  }

  return {
    state1,
    setState1,
    state2,
    setState2,
    handleInputChange1,
    handleInputChange2,
  }
}

const useStyle = makeStyles(theme =>({
  root: {
      display: 'flex',
      flexDirection: 'column',
     '& .MuiFormControl-root': {
      width: '96%',
      margin: theme.spacing(1)
     }
  },
}))


export function Form(props) {

  const classes = useStyle();

  return (
   <form className={classes.root}>
     {props.children}
   </form>
  )
}
