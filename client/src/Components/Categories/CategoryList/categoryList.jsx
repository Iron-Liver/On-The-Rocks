import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { makeStyles,  Button,  Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import theme from '../../../Utils/theme';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../Redux/Category/categoryActions'

const CategoryList = () => {
	const useStyles = makeStyles((theme)=>({
		root: {
			width: "100%",
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
			width:500,
		},
		last: {
			padding: 8,
		}
	}));

	const {categories} = useSelector(state => state.categoryReducer)
	const classes = useStyles();
	const dispatch = useDispatch();
	useEffect(() => {
        dispatch(getAllCategories())
	},
	// eslint-disable-next-line
	[])

    const columns = [
        {field: 'id', headerName: '#', width: 90 },
		{field: 'name', headerName: 'Name', width: 160},
		{field: 'description', headerName: 'Description', width: 400},
		{
			field: 'Edit',
			headerName: 'EDIT',
			sortable: false,
			width: 120,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
            <Link to={`/private/category/update/${params.id}`} style={{textDecoration:'none'}}>
              <Button style={{fontWeight: 1000}} variant="contained" color="secondary">Edit</Button>
            </Link>
					</ThemeProvider>
				);
			},
		},
		{
			field: 'Detail',
			headerName: 'DETAIL',
			sortable: false,
			width: 120,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
            <Link to={`/category/${params.id}`}>
						  <Button style={{fontWeight: 1000}} variant="contained" color="secondary">Detail</Button>
            </Link>
					</ThemeProvider>
				);
			},
		},
	];

    return(
        <div className={classes.root}>  
            <ThemeProvider theme={theme}>

					<Container style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '50px', marginBottom:'20px'}}>
						<h1 >
							Categories:
						</h1>
						<Link to="/private/category/add" style={{textDecoration:'none'}}>
							<Button variant="contained" color="secondary" >
								Add New Category
							</Button>
						</Link>
					</Container>

				<Container style={{height: 460, width: '100%'}}>
					<Container style={{display: 'flex', height: '100%'}}>
						<DataGrid rows={categories} columns={columns} />
					</Container>
				</Container>

			</ThemeProvider>
        </div>
    )

}
export default CategoryList;