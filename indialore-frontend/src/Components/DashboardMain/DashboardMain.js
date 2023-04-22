import React from "react";

// import AnalyticsSharpIcon from '@mui/icons-material/AnalyticsSharp';
// import StoreSharpIcon from '@mui/icons-material/StoreSharp';
// import PendingSharpIcon from '@mui/icons-material/PendingSharp';

import "./DashboardMain.css";

function DashboardMain() {
  return (
      <main>
        <h2>Dashboard</h2>
        <div className="date">
          <input type="date" />
        </div>
        {/* BEGIN OF INSIGHTS SECTION */}
        <div className="insights">
          <div className="sales">
            {/* <span><AnalyticsSharpIcon /></span> */}
            <div className="middle">
              <div className="left">
                <h3>Total Sales</h3>
                <h2>&#8377;25000</h2>
              </div>
              {/* <div className="progress">
                <svg>
                  <circle cx="45" cy="45" r="36"></circle>
                </svg>
              </div> */}
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>

          <div className="store_no">
            {/* <span><StoreSharpIcon /></span> */}
            <div className="middle">
              <div className="left">
                <h3>Stores</h3>
                <h2>3</h2>
              </div>
              {/* <div className="progress">
                <svg>
                  <circle cx="45" cy="45" r="36"></circle>
                </svg>
              </div> */}
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>

          <div className="sales">
            {/* <span><PendingSharpIcon /></span> */}
            <div className="middle">
              <div className="left">
                <h3>Pending Orders</h3>
                <h2>&#8377;5000</h2>
              </div>
              {/* <div className="progress">
                <svg>
                  <circle cx="45" cy="45" r="36"></circle>
                </svg>
              </div> */}
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>
        </div>
        {/* END OF INSIGHTS SECTION */}

        <div className="recent-orders">
          <h4>Recent Orders</h4>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product ID</th>
                <th>Store</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <a href="/dashboard">Show All</a>
        </div>
      </main>
  );
}

export default DashboardMain;
