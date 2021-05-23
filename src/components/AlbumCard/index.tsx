import React from "react";
import { useHistory } from "react-router-dom";
import { HeartTwoTone } from "@ant-design/icons";
import { FC } from "react";
import "./styles.scss";
import { IAlbum } from "../../Types";

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
        history.push(`/album-detail/${album["im:name"].label.toLowerCase()}`)
      }
    >
      <figure className="album-card__image">
        <img
          src={album["im:image"][2].label}
          alt={`${album["im:name"].label} cover`}
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
