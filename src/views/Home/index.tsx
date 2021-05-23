import React, { FC, useContext } from "react";
import { observer } from "mobx-react";
import { LoadingOutlined } from "@ant-design/icons";
import { GeneralStoreContext } from "../../store";

import AlbumCard from "../../components/AlbumCard";

import "./styles.scss";
import SearchInput from "../../components/SearchInput";

const Home: FC = observer(() => {
  const generalStore = useContext(GeneralStoreContext);
  const { albumsData, isLoading, searchValue } = generalStore;

  const albumsFilter = albumsData?.filter(
    (album) =>
      album["im:artist"].label
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      album["im:name"].label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const renderAlbuns = () => {
    if (isLoading) {
      return <LoadingOutlined />;
    } else if (albumsFilter && albumsFilter.length > 0) {
      return albumsFilter.map((album) => {
        return <AlbumCard key={album.id.label} album={album} />;
      });
    }
    return <p>Ops! There is no such artist or album in this list</p>;
  };

  return (
    <div className="home-view">
      <div className="home-view__title">
        <h1>The BEST of ITunes</h1>
      </div>
      <div className="home-view__search-input">
        <SearchInput />
      </div>
      <div className="home-view__albums-list">{renderAlbuns()}</div>
      <audio
        src={
          "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/bb/e0/85/bbe08553-751a-4cdf-64a6-f2bd76f9d065/mzaf_4863408292296822173.plus.aac.p.m4a"
        }
        controls
      ></audio>
    </div>
  );
});

export default Home;
