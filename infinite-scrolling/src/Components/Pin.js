import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "50vh",
    margin: "auto",
  },
  media: {
    width: "100%",
  },
  liked: {
    display: "flex",
    paddingTop: "10px",
  },
}));

export default function Pin({ pinInfo }) {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.card}>
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
        <Typography variant="subtitle2" component="p">
          {pinInfo.description}
        </Typography>
        <div className={classes.liked}>
          <FavoriteIcon color="secondary" />
          <Typography variant="body2">{pinInfo.like_count} likes</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
