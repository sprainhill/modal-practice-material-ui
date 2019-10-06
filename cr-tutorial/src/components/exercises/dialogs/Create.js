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
              id="standard-name"
              label="Title"
              value={title}
              onChange={handleChanges("title")}
              margin="normal"
              style={styles.formField}
            />
            <br />
            <TextField
              id="standard-name"
              label="Description"
              value={description}
              onChange={handleChanges("description")}
              margin="normal"
              style={styles.formField}
            />
            <br />
            <TextField
              id="standard-name"
              label="Name"
              value={muscles}
              onChange={handleChanges("muscles")}
              margin="normal"
              style={styles.formField}
            />
            <TextField
              id="standard-multiline-static"
              label="Multiline"
              multiline
              rows="4"
              defaultValue="Default Value"
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
