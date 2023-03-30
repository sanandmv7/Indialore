import React, { useEffect, useContext } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from './Pages/LoginPage';
import HomePage from "./Pages/HomePage";
import { AuthContext, FirebaseContext } from "./contexts/Context";

function App() {
  const {setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div>
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
        <LoginPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
