import { Grid, Button } from "@material-ui/core";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import React from "react";
import theme from "../../../Utils/theme";

const useStyles = makeStyles((theme)=>({
    title: {
		display: 'flex',
		justifyContent: 'center'
	},
    button: {
		display: 'block',
		marginTop: theme.spacing(2),
	}
}))

function AdminPanel() {
    const style = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <h1 className={style.title}>Admin Panel</h1>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        
        spacing={1}
      >
        <Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Button className={style.button} variant="body2" href="http://localhost:3000/private/category/add" color="secondary">
              Add Category
            </Button>
            <Button className={style.button} variant="body2" href="http://localhost:3000/private/category/update/:id" color="secondary">
              Category Update
            </Button>
            <Button className={style.button} variant="body2" href="http://localhost:3000/private/product/add" color="secondary">
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

/* onClick={preventDefault} */

export default AdminPanel;
