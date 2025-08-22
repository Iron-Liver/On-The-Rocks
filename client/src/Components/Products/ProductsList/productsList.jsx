import './products.css';
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { Button, Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import theme from '../../../Utils/theme';
import { getProducts } from '../../../Redux/Products/productsActions'

const ProductsList = () => {
	const useStyles = makeStyles((theme)=>({
		root: {
			width: "100%",

		},
		formControl: {
			margin: theme.spacing(1),
		},
		last: {
			padding: 8,
		}
	}));

	const {Products} = useSelector(state => state.productReducer)
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
        dispatch(getProducts())
	},
	// eslint-disable-next-line
	[])

    const columns = [
        {field: 'id', headerName: '#', width: 90 },
		{field: 'name', headerName: 'Name', width: 160},
		{field: 'description', headerName: 'Description', width: 400},
		{field: 'price', headerName: 'Price', width: 150 },
		{
			field: 'Edit',
			headerName: 'EDIT',
			sortable: false,
			width: 120,
			renderCell: params => {
				return (
                    <StyledEngineProvider injectFirst>
                        <ThemeProvider theme={theme}>
                            <Link to={`/private/product/update/${params.id}`} style={{textDecoration:'none'}}>
                                <Button style={{fontWeight: 1000}} variant="contained" color="secondary">EDIT</Button>
                            </Link>
                        </ThemeProvider>
                    </StyledEngineProvider>
                );
			},
		},
		{
			field: 'Detail',
			headerName: 'DETAILS',
			sortable: false,
			width: 120,
			renderCell: params => {
				return (
                    <StyledEngineProvider injectFirst>
                        <ThemeProvider theme={theme}>
                            <Link to={`/products/${params.id}`}>
                                <Button style={{fontWeight: 1000}} variant="contained" color="secondary">DETAILS</Button>
                            </Link>
                        </ThemeProvider>
                    </StyledEngineProvider>
                );
			},
		},
	];

    return (
        <div className="admin-products-tab-container">
            <div className={classes.root}>  
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>

                            <Container style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 50, marginBottom:'20px'}}>
                                <h1 >
                                Products:
                                </h1>
                    <Link to="/private/product/add">
                                    <Button variant="contained" color="secondary">
                                        Add New Product
                                    </Button>
                    </Link>
                                
                            </Container>

                        <Container style={{height: 460, width: '100%'}}>
                            <Container style={{display: 'flex', height: '100%'}}>
                                <DataGrid rows={Products ? Products : []} columns={columns} disableSelectionOnClick />
                            </Container>
                        </Container>

                    </ThemeProvider>
                </StyledEngineProvider>
            </div>
        </div>
    );

}
export default ProductsList;