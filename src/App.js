import "./App.css";

import "react-bootstrap/Alert";


import Home from "./pages/home";
import Posts from "./pages/posts";
import Users from "./pages/users";
import Pages from "./pages/pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Login from "./pages/login";


function App() {
  return (
    <>
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/pages">
            <Pages />
         </Route>
         
        </Switch>
    </>
  );
}

export default App;
