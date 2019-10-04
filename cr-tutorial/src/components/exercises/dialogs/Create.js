import React from "react";
import {
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default props => {
  const [open, setOpen] = React.useState(false);

  const styles = {
    button: {
      flexGrow: 1
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab color="inherit" size="small">
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <form></form>
        </DialogContent>
        <DialogActions>
          <Button color="primary">Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
