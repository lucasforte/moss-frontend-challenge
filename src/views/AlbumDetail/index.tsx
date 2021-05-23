import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { LoadingOutlined } from "@ant-design/icons";
import { FiChevronLeft } from "react-icons/fi";
import { GeneralStoreContext } from "../../store";
import { IAlbum, IMedia, MediaType } from "../../Types";
import FavoriteButton from "../../components/FavoriteButton";

import "./styles.scss";
import Services from "../../services";
import AudioPreviewCard from "../../components/AudioPreviewCard";

interface IUrlParams {
  album_id: string;
}

const AlbumDetail = observer(() => {
  const { album_id } = useParams<IUrlParams>();
  const history = useHistory();
  const generalStore = useContext(GeneralStoreContext);
  const { albumsData, isLoading, setIsLoading } = generalStore;

  const [album, setAlbum] = useState<IAlbum>();
  const [media, setMedia] = useState<IMedia[]>();

  useEffect(() => {
    setIsLoading(true);
    if (albumsData && albumsData.length > 0) {
      const albumsFilter = albumsData.filter(
        (alb) => alb.id.attributes["im:id"] === album_id
      );
      setAlbum(albumsFilter[0]);

      Services.getSearchResults(albumsFilter[0].title.label, MediaType.music)
        .then((mediaData) => {
          if (mediaData) {
            setMedia(mediaData);
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [album_id, albumsData, setIsLoading]);

  const renderMusicCards = () => {
    if (isLoading) {
      return <LoadingOutlined />;
    } else if (media && media.length > 0) {
      return media?.map((mediaData) => {
        return (
          <AudioPreviewCard
            key={mediaData.artistId}
            previewUrl={mediaData.previewUrl}
            trackName={mediaData.trackName}
          />
        );
      });
    } else {
      return <p>Sorry, we couldn`t find anything related :( </p>;
    }
  };

  return (
    <div className="album-detail">
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <>
          <LazyLoadComponent>
            <div
              className="album-detail__cover"
              style={{
                backgroundImage: `url(${album?.["im:image"][2].label})`,
              }}
            >
              <button
                className="cover__back-btn"
                onClick={() => history.goBack()}
              >
                <FiChevronLeft />
              </button>
            </div>
          </LazyLoadComponent>
          <div className="album-detail__title">
            <h1>{album?.["im:name"].label}</h1>
            <FavoriteButton album={album} />
          </div>
          <div className="album-detail__info">
            <ul>
              <li>
                <span>Artist: </span>
                {album?.["im:artist"].label}
              </li>
              <li>
                <span>Category: </span>
                {album?.category.attributes.label}
              </li>
              <li>
                <span>Price: </span>
                {album?.["im:price"].label}
              </li>
              <li>
                <span>Release Date: </span>
                {album?.["im:releaseDate"].attributes.label}
              </li>
              <li>
                <span>ITunes page: </span>
                <a
                  href={album?.link.attributes.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here
                </a>
              </li>
            </ul>
          </div>
          <div className="album-detail__media">
            <p>
              More of <span>{album?.title.label}</span> on ITunes
            </p>
            <div className="media__list">{renderMusicCards()}</div>
          </div>
        </>
      )}
    </div>
  );
});

export default AlbumDetail;
