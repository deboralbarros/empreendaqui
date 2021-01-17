import { Switch, Route, useHistory } from "react-router-dom";

import InitialPage from "../pages/InitialPage";
import Profile from "../pages/Profile";
import Options from "../pages/Options";
import SearchProviders from "../pages/SearchProviders";
import ProvidersList from "../pages/ProvidersList";
import Provider from "../pages/Provider";
import TransactionHistory from "../pages/TransactionHistory";
import CreateBid from "../pages/CreateBid";
import Customer from "../pages/Customer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SelectProfile from "../pages/SelectProfile";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={InitialPage} />
      <Route path="/selectprofile" exact component={SelectProfile} />
      <Route path="/login" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/options" exact component={Options} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/provider" exact component={Provider} />
      <Route path="/providerslist" exact component={ProvidersList} />
      <Route path="/customer" exact component={Customer} />
      <Route path="/searchproviders" exact component={SearchProviders} />
      <Route path="/bidlist" exact component={ProvidersList} />
      <Route path="/searchbid" exact component={SearchProviders} />
      <Route path="/transactionhistory" exact component={TransactionHistory} />
      <Route path="/history" exact component={TransactionHistory} />
      <Route path="/createbid" exact component={CreateBid} />
    </Switch>
  );
};

export default Routes;
