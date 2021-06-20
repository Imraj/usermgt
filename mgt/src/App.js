import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { connect } from 'react-redux'

import {Login} from "./pages/Login"
import {Users} from "./pages/Users"
import {Profile} from "./pages/Profile"

import { logout } from "./actions/auth";
import { updatePassword } from "./actions/index";


function App() {

  const [showRegularBoard, setShowRegularBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      setShowRegularBoard(currentUser.roles.includes("ROLE_REGULAR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
      <Router>
        <div className="app">
          <header className="app-header">
            <Switch>
              <Route exact path="/profile/:id" exact component={ Profile } />
              <Route path="/login" component={ Login } />
              <Route path="/users" component={ Users } />
            </Switch>
          </header>
        </div>
      </Router>
  );
}

export default App;
