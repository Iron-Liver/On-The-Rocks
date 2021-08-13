import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { makeStyles,  Button,  Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
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
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
					<Link to={`/private/product/update/${params.id}`} style={{textDecoration:'none'}}>
						<Button style={{fontWeight: 1000}} variant="contained" color="secondary">EDIT</Button>
					</Link>
					</ThemeProvider>
				);
			},
		},
		{
			field: 'Detail',
			headerName: 'DETAILS',
			sortable: false,
			width: 120,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
						<Link to={`/products/${params.id}`}>
							<Button style={{fontWeight: 1000}} variant="contained" color="secondary">DETAILS</Button>
						</Link>
					</ThemeProvider>
				);
			},
		},
	];

    return(
        <div className={classes.root}>  
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
						<DataGrid rows={Products ? Products : []} columns={columns} />
					</Container>
				</Container>

			</ThemeProvider>
        </div>
    )

}
export default ProductsList;