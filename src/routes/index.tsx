import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";
import { GeneralStoreContext } from "../store";

import Home from "../views/Home";
import AlbumDetail from "../views/AlbumDetail";
import PageContainer from "../components/PageContainer";
import Services from "../services";
import { IAlbum } from "../Types";

const Routes = observer(() => {
  const generalStore = useContext(GeneralStoreContext);
  const { albumsData, setAlbums, setIsLoading, setInitialFavorites } =
    generalStore;

  const localFavs = localStorage.getItem("@myfav:albums");

  useEffect(() => {
    if (!albumsData || albumsData.length < 1) {
      Services.getAlbuns()
        .then((feed) => {
          if (feed) {
            setAlbums(feed.entry);
          }
        })
        .finally(() => setIsLoading(false));
    }

    if (localFavs) {
      const favs: IAlbum[] = JSON.parse(localFavs);
      if (favs.length > 0) {
        setInitialFavorites(favs);
      }
    }
  }, [albumsData, setAlbums, setIsLoading, setInitialFavorites, localFavs]);

  return (
    <Router>
      <PageContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/album-detail/:album_id" exact component={AlbumDetail} />
        </Switch>
      </PageContainer>
    </Router>
  );
});

export default Routes;
