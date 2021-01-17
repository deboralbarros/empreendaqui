import { Switch, Route } from "react-router-dom";

import SearchProviders from "../pages/SearchProviders";
import ProvidersList from "../pages/ProvidersList";
import Provider from "../pages/Provider";
import TransactionHistory from "../pages/TransactionHistory";

const Routes = () => (
  <Switch>
    <Route path="/" exact />
    <Route path="/register" exact />
    <Route path="/login" exact />
    <Route path="/findcustomers" exact />
    <Route path="/home" exact />
    <Route path="/options" exact />
    <Route path="/profile" exact />
    <Route path="/provider" exact component={Provider} />
    <Route path="/providerslist" exact component={ProvidersList} />
    <Route path="/startyourbusiness" exact />
    <Route path="/customer" exact />
    <Route path="/searchproviders" exact component={SearchProviders} />
    <Route path="/transactionhistory" exact component={TransactionHistory} />
  </Switch>
);

export default Routes;
