import React from "react";
import Paper from "@material-ui/core/Paper";

const LeftPane = ({ styles }) => {
  console.log("LP styles", styles);
  return <Paper style={styles.Paper}>Left pane</Paper>;
};

export default LeftPane;
