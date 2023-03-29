import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

// import LoginPage from './Pages/LoginPage';
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route path="/login">
        <LoginPage />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
