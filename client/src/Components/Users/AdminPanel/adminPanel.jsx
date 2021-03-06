import { Grid, Button } from "@material-ui/core";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/private/panel/users">
              <Button className={style.button} variant="body2" color="secondary">
                Users
              </Button>
            </Link>
            <Link to="/private/panel/categories">
              <Button className={style.button} variant="body2" color="secondary">
                Categories
              </Button>
            </Link>
            <Link to="/private/panel/products">
              <Button className={style.button} variant="body2" color="secondary">
                Products
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

/* onClick={preventDefault} */

export default AdminPanel;
