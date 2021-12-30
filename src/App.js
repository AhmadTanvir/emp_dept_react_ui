import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Routes } from "react-router-dom";
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {AddEmployee} from './components/AddEmployee';
import {EditUser} from './components/EditUser';
import { GlobalProvider } from "./context/GlobalState";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{ maxWidth: "50rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add" component={AddUser} />
              <Route path="/edit/:id" component={EditUser} />
              <Route path="/add_emp" component={AddEmployee} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
