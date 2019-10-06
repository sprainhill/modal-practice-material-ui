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

  const { title, description, muscles } = exercise,
    { muscles: categories } = props;

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
              <InputLabel htmlFor="muscles">Muscles</InputLabel>
              <Select
                value={muscles}
                onChange={handleChanges("muscles")}
                style={styles.formField}
              >
                {categories.map(category => {
                  return <MenuItem value={category}>{category}</MenuItem>;
                })}

                {/* <MenuItem value={"Shoulders"}>Shoulders</MenuItem>
                <MenuItem value={"Chest"}>Chest</MenuItem>
                <MenuItem value={"Arms"}>Arms</MenuItem>
                <MenuItem value={"Back"}>Back</MenuItem>
                <MenuItem value={"Legs"}>Legs</MenuItem> */}
              </Select>
            </FormControl>
            <br />
            <TextField
              label="Description"
              multiline
              rows="4"
              onChange={handleChanges("description")}
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
