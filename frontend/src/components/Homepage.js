import React from "react";
import "./Homepage.scss";
import Sidebar from "./Sidebar";
import Content from "./Content";

function Homepage() {
  return (
    <div className="Homepage container d-flex" fluid="md">
      <Sidebar className=""></Sidebar>
      <Content className=""></Content>
    </div>
  );
}

export default Homepage;
