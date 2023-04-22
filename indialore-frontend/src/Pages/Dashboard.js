import React from 'react';

import Sidebar from '../Components/Sidebar/Sidebar';
import DashboardMain from '../Components/DashboardMain/DashboardMain';
import DashboardRight from '../Components/DashbooardRight/DashboardRight';

import "./Dashboard.css";

function Dashboard() {
  return (
    <div class="container">
        <Sidebar />
        <DashboardMain />
        <DashboardRight />
    </div>
  )
}

export default Dashboard