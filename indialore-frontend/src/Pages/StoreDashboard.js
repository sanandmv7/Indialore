import React from 'react';

import Sidebar from '../Components/Sidebar/Sidebar';
import StoreDashboardMain from '../Components/StoreDashboardMain/StoreDashboardMain';
import StoreDashboardRight from '../Components/StoreDashboardRight/StoreDashboardRight';

import "./Dashboard.css";

function StoreDashboard() {
  return (
    <div class="container">
        <Sidebar />
        <StoreDashboardMain />
        <StoreDashboardRight />
    </div>
  )
}

export default StoreDashboard