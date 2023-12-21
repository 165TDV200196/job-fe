import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import "./App.scss";
import Home from "./features/components/Home/Home";
import Jobs from "./features/components/Jobs/Jobs";
import { checkBar } from "./features/container/Functionjs";
import "antd/dist/antd.css";
import DetailJob from "./features/components/DetailJob/DetailJob";
import Login from "./features/components/Login/Login";
import Admin from "./app/Admin";
import Register from "./features/components/Register/Register";
import checkLoginApi from "./api/checkLogin";
import Empty from "./features/components/Empty/Empty";
import CheckMenu from "./features/components/CheckMenu/CheckMenu";
function App() {
  useEffect(() => {
    checkBar();
  }, []);

  const [isLoad, setIsLoad] = useState(true);

  const handleLogin = () => {
    setIsLoad(!isLoad);
  };

  const [checkAdmin, setCheckAdmin] = useState();
  useEffect(() => {
    checkLoginApi.checkLogin().then((ok) => {
      let user = ok.data.user.role;
      console.log("ddddd");
      if (user === "admin" || user === "grant") {
        setCheckAdmin(
          <Route path="/admin">
            <Ladmin />
          </Route>,
        );
      } else {
        setCheckAdmin(
          <Route path="/admin">
            <Empty />
          </Route>,
        );
      }
    });
  }, [isLoad]);

  return (
    <div>
      <Router>
        <Switch>
          <Route path={["/admin", "/register", "/Login", "/"]}>
            <CheckMenu />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {checkAdmin}
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          <Route exact path="/jobs/work/:id">
            <DetailJob />
          </Route>
          <Route exact path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
function Ladmin() {
  let { path, url } = useRouteMatch();

  return <Admin path={path} url={url} />;
}
export default App;
