import React, { useEffect, useContext } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { AuthContext, FirebaseContext } from "./contexts/UserContext";
import StoryPage from "./Pages/StoryPage";
import ContactPage from "./Pages/ContactPage";
import PolicyPage from "./Pages/PolicyPage";
import PaymentsPage from "./Pages/PaymentsPage";
import ReturnPage from "./Pages/ReturnPage";
import ShipmentPage from "./Pages/ShipmentPage";
import TncPage from "./Pages/TncPage";
import AboutPage from "./Pages/AboutPage";
import ShopPage from "./Pages/ShopPage";
import { PostProvider } from "./contexts/PostContext";
import { SearchProvider } from "./contexts/SearchContext";
import ProductPage from "./Pages/ProductPage";
import CheckoutPage from "./Pages/CheckoutPage";
import PaymentSuccessPage from "./Pages/PaymentSuccessPage";
import Dashboard from "./Pages/Dashboard";
import ProductDashboard from "./Pages/ProductDashboard";
import SearchResultsPage from "./Pages/SearchResultsPage";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <PostProvider>
        <SearchProvider>
          <Router>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route path="/view">
              <ProductPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/checkout">
              <CheckoutPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/story">
              <StoryPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/policy">
              <PolicyPage />
            </Route>
            <Route path="/payments">
              <PaymentsPage />
            </Route>
            <Route path="/return">
              <ReturnPage />
            </Route>
            <Route path="/shipment">
              <ShipmentPage />
            </Route>
            <Route path="/thankyou">
              <PaymentSuccessPage />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/search">
              <SearchResultsPage />
            </Route>
            <Route path="/dashboard-products">
              <ProductDashboard />
            </Route>
            <Route path="/tnc">
              <TncPage />
            </Route>
          </Router>
        </SearchProvider>
      </PostProvider>
    </div>
  );
}

export default App;
