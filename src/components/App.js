
import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import ContactUs from "./ContactUs"

function App() {
  return (
    
      <div className="w-100 h-100" style={{ maxWidth: "100%"}}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route className="w-50" path="/signup" component={Signup} />
              <Route className="w-50" path="/login" component={Login} />
              <Route className="w-50" path="/forgot-password" component={ForgotPassword} />
              <Route className="w-50" path="/contact-us" component={ContactUs} />
            </Switch>
          </AuthProvider>
          
        </Router>
      </div>
      
  )
}

export default App