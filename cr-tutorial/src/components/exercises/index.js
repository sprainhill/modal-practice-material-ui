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

const Exercises = ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome",
    description = "Please select an exercise from the list on the left"
  }
}) => {
  // console.log("Exercises exercises", exercises);

  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => {
            console.log("Exercises group", group);
            console.log("Exercises category", category);
            if (!category || category === group) {
              return (
                <>
                  <Typography variant="subtitle1">{group}</Typography>
                  <List component="ul" style={{ textTransform: "capitalize" }}>
                    {exercises.map(({ id, title }) => {
                      // console.log("inside exercises", exercises);
                      return (
                        <ListItem button onClick={() => onSelect(id)}>
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
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle1" style={{ marginTop: 20 }}>
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
