import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
        <HomePage />
        </Route>
        <Route path="/signup">
        <SignUpPage />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
