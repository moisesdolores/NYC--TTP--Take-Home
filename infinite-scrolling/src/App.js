import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Pin from "./Components/Pin";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Navbar from "./Components/Navbar";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    overflowY: " hidden",
    marginTop: 115,
  },
  loader: {
    marginTop: 300,

    width: "100%",
  },
}));

function App() {
  const classes = useStyles();
  const [totalPins, setTotalPins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pinsPerPage] = useState(3);
  const [pins, setPins] = useState([]);
  const lastPage = totalPins.length / pinsPerPage;

  useEffect(() => {
    const fetchPins = async () => {
      setLoading(true);
      const response = await axios.get("nyc_ttp_pins.json");
      setTotalPins(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    fetchPins();
  }, []);

  useEffect(() => {
    const lastPin = page * pinsPerPage;
    const firstPin = lastPin - pinsPerPage;
    const currentPins = totalPins.slice(firstPin, lastPin);
    setPins([...pins, ...currentPins]);
    if (page === lastPage) {
      setPage(1);
    }
  }, [page, loading]);

  return (
    <InfiniteScroll
      dataLength={pins.length}
      next={() => setPage(page + 1)}
      hasMore={true}
    >
      <Navbar />
      {loading ? (
        <Grid
          className={classes.loader}
          container
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <CircularProgress color="secondary" />
        </Grid>
      ) : (
        <div className={classes.mainGrid}>
          <Grid container spacing={2}>
            {pins.map((pin, index) => {
              return (
                <Grid item key={index} xs={12}>
                  <Pin key={index} pinInfo={pin} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
    </InfiniteScroll>
  );
}

export default App;
