import { Switch, Route } from "react-router-dom";

import InitialPage from "../pages/InitialPage";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Options from "../pages/Options";
import ProvidersOptions from "../pages/ProvidersOptions";
import SearchProviders from "../pages/SearchProviders";
import ProvidersList from "../pages/ProvidersList";
import Provider from "../pages/Provider";
import TransactionHistory from "../pages/TransactionHistory";
import CreateBid from "../pages/CreateBid";
import Customer from "../pages/Customer";
import Login from "../pages/Login";
import SelectProfile from "../pages/SelectProfile";
import Tips from "../pages/Tips";
import TurnsMei from "../pages/TurnsMei";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={InitialPage} />
    <Route path="/selectprofile" exact component={SelectProfile} />
    <Route path="/login" exact component={Login} />
    <Route path="/home" exact component={Home} />
    <Route path="/options" exact component={Options} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/provider" exact component={Provider} />
    <Route path="/providersoptions" exact component={ProvidersOptions} />
    <Route path="/providerslist" exact component={ProvidersList} />
    <Route path="/customer" exact component={Customer} />
    <Route path="/searchproviders" exact component={SearchProviders} />
    <Route path="/bidlist" exact component={ProvidersList} />
    <Route path="/searchbid" exact component={SearchProviders} />
    <Route path="/transactionhistory" exact component={TransactionHistory} />
    <Route path="/history" exact component={TransactionHistory} />
    <Route path="/createbid" exact component={CreateBid} />
    <Route path="/tips" exact component={Tips} />
    <Route path="/turnsmei" exact component={TurnsMei} />
  </Switch>
);

export default Routes;
