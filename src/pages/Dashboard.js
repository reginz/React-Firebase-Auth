import React from "react";
import GenerateBlend from "../components/GenerateBlend";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/navigation/Sidebar";
import SavedOils from "../components/SavedOils";

function Dashboard() {
  return (
    <div className="d-flex page-nav-contaier w-100">
      <Navigation />
      <Sidebar />
      <div>
        <SavedOils />
        <GenerateBlend />
      </div>
    </div>
  );
}

export default Dashboard;
