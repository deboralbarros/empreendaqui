import { Switch, Route } from "react-router-dom";

import SearchProviders from "../pages/SearchProviders";
import ProvidersList from "../pages/ProvidersList";
import Provider from "../pages/Provider";
import TransactionHistory from "../pages/TransactionHistory";
import CreateBid from "../pages/CreateBid";
import Customer from "../pages/Customer";
import Tips from "../pages/Tips";
import HomeProvider from "../pages/HomeProvider";
import TurnsMei from "../pages/TurnsMei";

const Routes = () => (
  <Switch>
    <Route path="/" exact />
    <Route path="/register" exact />
    <Route path="/login" exact />
    <Route path="/findcustomers" exact />
    <Route path="/home" exact component={HomeProvider} />
    <Route path="/options" exact />
    <Route path="/profile" exact />
    <Route path="/provider" exact component={Provider} />
    <Route path="/providerslist" exact component={ProvidersList} />
    <Route path="/startyourbusiness" exact />
    <Route path="/customer" exact component={Customer} />
    <Route path="/searchproviders" exact component={SearchProviders} />
    <Route path="/bidlist" exact component={ProvidersList} />
    <Route path="/searchbid" exact component={SearchProviders} />
    <Route path="/transactionhistory" exact component={TransactionHistory} />
    <Route path="/history" exact component={TransactionHistory} />
    <Route path="/createbid" component={CreateBid} />
    <Route path="/tips" exact component={Tips} />
    <Route path="/turnsmei" exact component={TurnsMei} />
  </Switch>
);

export default Routes;
