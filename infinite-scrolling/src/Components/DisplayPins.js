import { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import data from "../config/nyc_ttp_pins.json";
import Pin from "./Pin";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex-block",
  },
}));

export default function DisplayPins() {
  const classes = useStyles();
  const [pins, setPins] = useState([]);
  return (
    // <InfiniteScroll dataLength={data.length}>
    <Grid
      className={classes.container}
      container
      spacing={1}
      direction="row"
      justify="center"
      alignItems="center"
    >
      {data.map((pin, index) => {
        return (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Pin pinInfo={pin} />
          </Grid>
        );
      })}
    </Grid>
    // </InfiniteScroll>
  );
}
