import { Switch } from "react-router-dom";

import {Route} from "react-router-dom";

import Home from "~/pages/Home";
import Register from "~/pages/Register";

function Routes({ children }) {
  return (
    <Switch>
      <Route path="/" component={Home} exact>
        {children}
      </Route>
      <Route path="/register" component={Register} >
        {children}
      </Route>
    </Switch>
  );
}
export default Routes;
