import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

import { auth } from './firebase';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme';
import './App.css';

import ChooseUser from './components/auth/InitView/ChooseUser';
import InitView from "./components/auth/InitView/InitView";
import Onboarding from './components/auth/InitView/Onboarding';
import Login from "./components/auth/Login/Login";
import Profile from "./components/auth/Profile/Profile";
import StatusService from "./components/CurrentService/StatusService/StatusService";
import Payment from "./components/auth/Payment/Payment";
import CreditCardView from "./components/auth/Payment/CreditCard";
import ConfirmPay from "./components/CurrentService/CurrentService/ConfirmPay";
import CancelService from "./components/CurrentService/StatusService/CancelService";
import Dashboard from './components/CurrentService/CurrentService/Dashboard';
import PreviousServices from './components/PreviousServices/PreviousServices';
import SpecificService from "./components/PreviousServices/SpecificService";

// employee
import LoginEmployee from "./componentsEmployees/auth/Login/LoginEmployee";
import DashboardEmployee from './componentsEmployees/Dashboard/DashboardEmployee';

function App(props) {

  //  const [viewNavbar, setViewNavbar] = useState(false);
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
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <InitView />
          </Route>
          <Route path='/choose-user'>
            <ChooseUser />
          </Route>
          {/* employee */}

          <Route path='/login-employee'>
            <LoginEmployee />
          </Route>
          <Route path='/dashboard-employee'>
            <DashboardEmployee />
          </Route>

          {/* usuario */}
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/start'>
            <Onboarding />
          </Route>
          <Route path='/profile' >
            <Profile />
          </Route>
          <Route path='/payment' >
            <Payment />
          </Route>
          <Route path='/creditcard'>
            <CreditCardView />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/confirm'>
            <ConfirmPay />
          </Route>
          <Route path='/cancel-service'>
            <CancelService />
          </Route>
          <Route path='/specific-service' >
            <SpecificService />
          </Route>
          <Route path='/previous-services' >
            <PreviousServices />
          </Route>
          <Route path='/status-service' >
            <StatusService />
          </Route>
          <Route path='/confirm-pay' >
            <ConfirmPay />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  ) : (
      <p>Cargando...</p>
    );
}

export default App;