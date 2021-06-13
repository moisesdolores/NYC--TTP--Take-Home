import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "300px",
    margin: "auto",
  },
  media: {
    height: "100%",
    width: "100%",
  },
}));

export default function Pin({ pinInfo }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <CardMedia
          component="img"
          className={classes.media}
          alt={pinInfo.title}
          image={pinInfo.images["orig"].url}
          title={pinInfo.title}
        />
        <Typography gutterBottom variant="h5" component="h2">
          {pinInfo.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {pinInfo.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
