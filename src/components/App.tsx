import React from "react";
import Login from "src/components/Login";
import PostList from "src/components/post/List";
import Member from "src/components/Member";
import Profile from "src/components/Profile";
import Setting from "src/components/Setting";
import Timeline from "src/components/Timeline";
import NotFound from "src/components/NotFound";
import { Route, Switch } from "react-router-dom";

export default function () {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/:project/setting" component={Setting} />
        <Route path="/:project/post" component={PostList} />
        <Route path="/:project/member" component={Member} />
        <Route path="/:project/timeline" component={Timeline} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
