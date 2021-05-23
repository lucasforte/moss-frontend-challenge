import React, { FC, useContext } from "react";
import { observer } from "mobx-react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { GeneralStoreContext } from "../../store";
import { IAlbum } from "../../Types";
import "./styles.scss";

interface IProps {
  album?: IAlbum;
}

const FavoriteButton: FC<IProps> = observer((props) => {
  const { album } = props;
  const generalStore = useContext(GeneralStoreContext);

  const { favoriteAlbums, setFavoriteAlbums } = generalStore;

  const favFilter = favoriteAlbums.filter(
    (fav) => fav.id.label === album?.id.label
  );

  const isFav = favFilter && favFilter.length > 0 ? true : false;

  return (
    <button
      className="favorite-button"
      onClick={() => setFavoriteAlbums(album)}
    >
      {isFav ? (
        <HeartFilled className="favorite-button__svg--active" />
      ) : (
        <HeartOutlined className="favorite-button__svg" />
      )}
    </button>
  );
});

export default FavoriteButton;
