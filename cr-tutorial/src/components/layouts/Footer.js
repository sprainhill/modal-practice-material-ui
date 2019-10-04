import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

const Footer = ({ muscles }) => {
  // console.log("Footer muscles", muscles);
  return (
    <Paper>
      <Tabs indicatorColor="primary" textColor="primary" centered value={1}>
        <Tab label="All" />
        {muscles.map((muscle, index) => {
          return <Tab label={muscle} key={index} />;
        })}
      </Tabs>
    </Paper>
  );
};

export default Footer;
