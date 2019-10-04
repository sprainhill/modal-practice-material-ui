import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import LeftPane from "./LeftPane";
// import RightPane from "./RightPane";

const styles = {
  Paper: {
    padding: 20,
    margin: 10
  }
};

const Exercises = () => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>Left pane</Paper>;
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>Right pane</Paper>;
      </Grid>
    </Grid>
  );
};

export default Exercises;
