import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";
import { GeneralStoreContext } from "../store";

import Home from "../views/Home";
import Favorites from "../views/Favorites";
import AlbumDetail from "../views/AlbumDetail";
import PageContainer from "../components/PageContainer";
import Services from "../services";

const Routes = observer(() => {
  const generalStore = useContext(GeneralStoreContext);

  useEffect(() => {
    if (!generalStore.albumsData || generalStore.albumsData.length < 1) {
      Services.getAlbuns()
        .then((feed) => {
          if (feed) {
            generalStore.setAlbums(feed.entry);
          }
        })
        .finally(() => generalStore.setIsLoading(true));
    }
  }, [generalStore]);

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
});

export default Routes;
