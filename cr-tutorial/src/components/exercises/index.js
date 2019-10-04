import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemText } from "@material-ui/core";
import ListItemLink from "@material-ui/core/List";

const styles = {
  Paper: {
    padding: 20,
    margin: 10,
    height: 500,
    overflowY: "auto"
  }
};

const Exercises = ({ exercises, category }) => {
  console.log("Exercises exercises", exercises);
  console.log("Exercises category", category);
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => {
            console.log("Exercises group", group);
            if (!category || category === group) {
              return (
                <>
                  <Typography variant="subtitle1">{group}</Typography>
                  <List component="ul" style={{ textTransform: "capitalize" }}>
                    {exercises.map(({ title }) => {
                      return (
                        <ListItem button>
                          <ListItemText primary={title} />
                        </ListItem>
                      );
                    })}
                  </List>
                </>
              );
            } else {
              return null;
            }
          })}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="h5">Welcome</Typography>
          <Typography variant="subtitle1" style={{ marginTop: 20 }}>
            Please select an exercise from the list on the left
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
