import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "../pages/Settings";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import OilLibrary from "../pages/OilLibrary";
import "../styles/App.css";
import "../styles/OilCard.css";
import "../styles/ThreeView.css";
import SingleOil from "../pages/SingleOil";
import SinglePatient from "../pages/SinglePatient";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Patients from "../pages/Patients";
import Glossary from "../pages/Glossary";
import Components from "../pages/Components";
import Landing from "../pages/web/Landing";
import Visit from "../pages/Visit";
import ProfileInfo from "./cards/ProfileInfo";
function App() {
  return (
    <div style={{ backgroundColor: "var(--white)" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={OilLibrary} />
            <PrivateRoute path="/settings" component={Settings} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/patients" component={Patients} />
            <PrivateRoute path="/oil-details/:id" component={SingleOil} />
            <PrivateRoute path="/visits/:id" component={SinglePatient} />
            <PrivateRoute path="/dictionary" component={Glossary} />
            <PrivateRoute path="/components" component={Components} />
            <PrivateRoute path="/visits" component={Visit} />
            <PrivateRoute path="/profile-information" component={ProfileInfo} />
            <Route path="/home" component={Landing} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route component={NotFound} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
