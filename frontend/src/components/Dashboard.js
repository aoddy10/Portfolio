import React from "react";
import "./Dashboard.scss";
import Sidebar from "./Sidebar";
import Content from "./Content";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="Container">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="Content">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
