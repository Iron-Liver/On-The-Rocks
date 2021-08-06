import React from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/styles'

export function useForm({initialForm, validate}) {
  const [state, setState] = useState(initialForm);
  const [errors, setErrors] = useState({})

  const handleInputChange = ( e ) => {
    const  { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
    setErrors(
      validate({
        ...state,
        [name]: value
      }, name, errors)
    );
  }

  return {
    state,
    setState,
    errors,
    setErrors,
    validate,
    handleInputChange,
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
