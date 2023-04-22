import React from "react";

function ProductDashboardMain() {
  return (
    <main>
      <h2>Products</h2>
      <div className="recent-orders">
        <h4>LISTED PRODUCTS</h4>
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Size</th>
              <th>Availablity</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <a href="/dashboard-products">Show All</a>
      </div>
    </main>
  );
}

export default ProductDashboardMain;
