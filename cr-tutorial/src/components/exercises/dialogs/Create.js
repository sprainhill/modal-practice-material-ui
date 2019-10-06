import React from "react";
import {
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
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
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleChanges = name => event => {
    setExercise({ ...exercise, [name]: event.target.value });
  };

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
              id="standard-name"
              label="Title"
              value={exercise.title}
              onChange={handleChanges("title")}
              margin="normal"
            />
            <TextField
              id="standard-name"
              label="Description"
              value={exercise.description}
              onChange={handleChanges("description")}
              margin="normal"
            />
            <TextField
              id="standard-name"
              label="Name"
              value={exercise.muscles}
              onChange={handleChanges("muscles")}
              margin="normal"
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
