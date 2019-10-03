import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

const Footer = () => {
  return (
    <Paper>
      <Tabs indicatorColor="primary" textColor="primary" centered value={1}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
};

export default Footer;
