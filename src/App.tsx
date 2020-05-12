import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "@progress/kendo-theme-material/dist/all.css";
import Drawer from "./components/AppDrawer";
import { Home, Products } from "./containers";
function App() {
  return (
    <Router>
      <Drawer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </Drawer>
    </Router>
  );
}
export default App;
