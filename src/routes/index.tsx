import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Favorites from "../views/Favorites";
import AlbumDetail from "../views/AlbumDetail";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" exact component={Favorites} />
        <Route path="/album-detail/:album" exact component={AlbumDetail} />
      </Switch>
    </Router>
  );
};

export default Routes;
