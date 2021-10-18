import './App.css';
import React from "react";
import "./App.css";
//Import route and our components
import { Route, Switch } from "react-router-dom";
import Stocks from "./pages/Stocks";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";
function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/price/:symbol"
          render={(routerProps) => <Price {...routerProps} />}
        />


      </Switch>
    </div>
  );
}

export default App;
