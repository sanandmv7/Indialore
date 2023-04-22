import React from 'react';

import Sidebar from '../Components/Sidebar/Sidebar';
import ProductDashboardMain from '../Components/ProductDashboardMain/ProductDashboardMain';
import ProductDashboardRight from '../Components/ProductDashboardRight/ProductDashboardRight';

import "./Dashboard.css";

function ProductDashboard() {
  return (
    <div class="container">
        <Sidebar />
        <ProductDashboardMain />
        <ProductDashboardRight />
    </div>
  )
}

export default ProductDashboard