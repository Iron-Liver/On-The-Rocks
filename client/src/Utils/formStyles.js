import {makeStyles} from '@material-ui/core'
const useFormStyles = makeStyles((theme)=>({
  root: {
    paddingBottom: "50px",
		marginTop: 50,
		marginBottom: 30,
		border:5,
		display:'flex',
    color: '#493d30',
    width: "100%"
	},
	title: {
		display:'flex',
		justifyContent: 'center',
    fontFamily: `"Heebo", sans-serif`,
    color: '#493d30',
    margin: 0,
    padding: "30px 0 0 0" 
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		width:500,
	},
	last: {
		padding: 8,
	},
  button: {
    background: '#493d30',
    fontWeight: 1000, 
    marginTop: 20
  }
}));

export default useFormStyles;