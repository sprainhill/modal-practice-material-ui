import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

const Footer = ({ muscles, category, onSelect }) => {
  // console.log("Footer muscles", muscles);
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  return (
    <Paper>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
        value={index}
        onChange={(event, index) => {
          onSelect(index === 0 ? "" : muscles[index - 1]);
        }}
      >
        <Tab label="All" />
        {muscles.map((muscle, index) => {
          return <Tab label={muscle} key={index} />;
        })}
      </Tabs>
    </Paper>
  );
};

export default Footer;
