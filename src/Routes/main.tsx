import React from "react";
import { Route, Router } from "react-router-dom";
import Settings from "../components/Settings/settings";
import { createBrowserHistory } from "history";
import Leftmenubar from "../components/Leftmenubar/Leftmenubar";
import Dialogue from "../components/Dialogues/dialouge";
export const history = createBrowserHistory();
const AppRoutes = () => (
  <Router history={history}>
    <Route path="/" component={Leftmenubar} />
    <Route path="/dialouges" component={Dialogue} />
    <Route path="/settings" component={Settings} />
  </Router>
);
export default AppRoutes;
