import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CreateDialog from "../exercises/dialogs/Create";

const styles = {
  header: {
    flexGrow: 1
  }
};

const Header = ({ muscles, onCreate }) => {
  // console.log("Header muscles", muscles);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h2" color="inherit" style={styles.header}>
          Exercise Database
        </Typography>
        <CreateDialog muscles={muscles} onCreate={onCreate} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
