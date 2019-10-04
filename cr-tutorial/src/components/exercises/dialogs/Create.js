import React from "react";
import {
  Button,
  Form,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

export default props => {
  <>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create a New Exercise</DialogTitle>
      <DialogContent>
        <DialogContentText>Please fill out the form below.</DialogContentText>
        <Form></Form>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Create</Button>
      </DialogActions>
    </Dialog>
  </>;
};
