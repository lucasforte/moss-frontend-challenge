import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HeartTwoTone } from "@ant-design/icons";
import { IAlbum } from "../../Types";

import "./styles.scss";

interface IProps {
  album: IAlbum;
}

const AlbumCard: FC<IProps> = (props) => {
  const { album } = props;
  const history = useHistory();

  return (
    <button
      className="album-card"
      onClick={() =>
        history.push(`/album-detail/${album.id.attributes["im:id"]}`)
      }
    >
      <figure className="album-card__image">
        <LazyLoadImage
          alt={`${album["im:name"].label} cover`}
          effect="blur"
          src={album["im:image"][2].label}
        />
      </figure>
      <div className="album-card__info">
        <div className="info__favorite">
          <HeartTwoTone />
        </div>
        <div className="info__name">
          <p>{album["im:name"].label}</p>
          <span>{album["im:artist"].label}</span>
        </div>
        <div className="info__price">
          <span>{album["im:price"].label}</span>
        </div>
      </div>
    </button>
  );
};

export default AlbumCard;
