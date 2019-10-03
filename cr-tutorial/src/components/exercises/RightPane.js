import React from "react";
import Paper from "@material-ui/core/Paper";

const RightPane = ({ styles }) => {
  console.log("RP styles", styles);
  return <Paper style={styles.Paper}>Right pane</Paper>;
};

export default RightPane;
