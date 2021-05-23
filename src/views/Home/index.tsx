import { FC, useEffect, useState } from "react";
import Services from "../../services";
import { IAlbum, IFeed, MediaType } from "../../Types";

import "./styles.scss";

const Home: FC = () => {
  const [albums, setAlbums] = useState<IAlbum[]>();
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    Services.getAlbuns().then((feedData: IFeed) => {
      setAlbums(feedData.entry);
    });
  }, []);

  const albumsFilter = albums?.filter(
    (album) =>
      album["im:artist"].label.toLowerCase().includes(searchInput) ||
      album["im:name"].label.toLowerCase().includes(searchInput)
  );

  const renderAlbuns = () => {
    if (albumsFilter && albumsFilter.length > 0) {
      return albumsFilter.map((album) => {
        return (
          <p
            onClick={() =>
              Services.getSearchResults(
                album.title.label.toLowerCase(),
                MediaType.music
              )
            }
          >
            {album["im:name"].label}
          </p>
        );
      });
    }
  };

  return (
    <div>
      <h1>Hello World</h1>
      <input
        type="text"
        placeholder="Search by artist or album"
        value={searchInput}
        onChange={({ target: { value } }) => setSearchInput(value)}
      />

      <div>{renderAlbuns()}</div>

      <audio
        src={
          "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/bb/e0/85/bbe08553-751a-4cdf-64a6-f2bd76f9d065/mzaf_4863408292296822173.plus.aac.p.m4a"
        }
        controls
      ></audio>
    </div>
  );
};

export default Home;
