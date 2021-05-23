import { FC, useEffect, useState } from "react";
import { getAlbuns } from "../../services";
import { IFeed } from "../../Types";
import "./styles.scss";

const Home: FC = () => {
  const [albums, setAlbums] = useState<IFeed>();

  useEffect(() => {
    getAlbuns().then((albumsData: IFeed) => {
      setAlbums(albumsData);

      console.log(albumsData.entry[0].category.attributes["im:id"]);
    });
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
