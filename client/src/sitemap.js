import React from "react";
import { Route } from "react-router";

export default (
  <Route>
    <Route exact path="/register" />
    <Route exact path="/login" />
    <Route exact path="/profiles" />
    <Route exact path="/profile/:id" />
    <Route exact path="/dashboard" />
    <Route exact path="/create-profile" />
    <Route exact path="/edit-profile" />
    <Route exact path="/add-experience" />
    <Route exact path="/add-education" />
    <Route exact path="/posts" />
    <Route exact path="/posts/:id" />
  </Route>
);
