import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Favorites from "../views/Favorites";
import AlbumDetail from "../views/AlbumDetail";
import PageContainer from "../components/PageContainer";

const Routes = () => {
  return (
    <Router>
      <PageContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/album-detail/:album" exact component={AlbumDetail} />
        </Switch>
      </PageContainer>
    </Router>
  );
};

export default Routes;
