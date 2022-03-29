import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Settings from "../pages/Settings"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import OilLibrary from "../pages/OilLibrary"
import '../styles/App.css'
import '../styles/OilCard.css'
import '../styles/ThreeView.css'
import SingleOil from "../pages/SingleOil"
import NotFound from "../pages/NotFound"
import Dashboard from "../pages/Dashboard"
import Patients from "../pages/Patients"
import WriteDb from "../service/WriteDb"
function App() {
  return (
   
      <div className="w-100" style={{backgroundColor:"var(--white)" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={OilLibrary} />
              <PrivateRoute path="/settings" component={Settings} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/patients" component={Patients} />
              <PrivateRoute path="/oil-details/:id" component={SingleOil} />
              <Route path="/signup" component={Signup} />
              <Route path="/a" component={WriteDb} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route component={NotFound} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default App
