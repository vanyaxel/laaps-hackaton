import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

import { auth } from './firebase';
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/auth/login";
import ServiceIndex from "./components/Service/ServiceForm";
import Profile from "./components/Admin/Profile";

function App(props) {

  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  return firebaseUser !== false ? (
    <Router>
      <div className="container">
        <Navbar firebaseUser={firebaseUser} />
        <Switch>
          <Route exact path='/'>
            inicio...
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/profile' >
            <Profile />
          </Route>
          <Route path='/service' >
            <ServiceIndex />
          </Route>
        </Switch>
      </div>
    </Router>
  ) : (
      <p>Cargando...</p>
    );
}

export default App;