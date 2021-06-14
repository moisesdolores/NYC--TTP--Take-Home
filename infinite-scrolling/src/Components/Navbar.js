import React from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.navbar} color="inherit">
      <Toolbar>
        <Typography variant="body1">
          <img className={classes.image} src="pinterest.png" alt="" />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
