import React from "react";
import {
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default props => {
  const [open, setOpen] = React.useState(false);
  const [exercise, setExercise] = React.useState({
    title: "",
    description: "",
    muscles: ""
  });

  const styles = {
    button: {
      flexGrow: 1
    },
    formField: {
      width: 500
    }
  };

  console.log("Create exercise: ", exercise);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleChanges = name => ({ target: { value } }) => {
    setExercise({ ...exercise, [name]: value });
  };

  const { title, description, muscles } = exercise;

  return (
    <>
      <Fab color="inherit" size="small" onClick={handleToggle}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <form>
            <TextField
              label="Title"
              value={title}
              onChange={handleChanges("title")}
              margin="normal"
              style={styles.formField}
            />
            <br />
            <FormControl>
              <InputLabel>Age</InputLabel>
              <Select
                value={values.age}
                onChange={handleChange}
                inputProps={{
                  name: "age",
                  id: "age-simple"
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <br />

            <TextField
              label="Name"
              value={muscles}
              onChange={handleChanges("muscles")}
              margin="normal"
              style={styles.formField}
            />
            <br />
            <TextField
              label="Description"
              multiline
              rows="4"
              defaultValue="Exercise description"
              margin="normal"
              style={styles.formField}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary">Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
