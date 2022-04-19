import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import TryInstaread from './components/main/TryInstaread';
import Search from './components/main/Search';
import Discover from './components/main/Discover';
import "./css/style.css";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/tryinstaread" component={TryInstaread} />
        <Route path="/" component={TryInstaread} />
      </Switch>
    </div>
  );
}
export default App;
