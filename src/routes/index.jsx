import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route path="/" exact />
    <Route path="/register" exact />
    <Route path="/login" exact />
    <Route path="/findcustomers" exact />
    <Route path="/home" exact />
    <Route path="/options" exact />
    <Route path="/profile" exact />
    <Route path="/provider" exact />
    <Route path="/providerslist" exact />
    <Route path="/startyourbusiness" exact />
    <Route path="/customer" exact />
  </Switch>
);

export default Routes;
