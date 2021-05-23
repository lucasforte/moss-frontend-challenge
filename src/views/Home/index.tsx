import { FC, useEffect, useState } from "react";
import { getAlbuns } from "../../services";
import "./styles.scss";

const Home: FC = () => {
  const [albums, setAlbums] = useState<any[]>([]);

  useEffect(() => {
    getAlbuns().then((albumsData) => {
      setAlbums(albumsData);
    });

    console.log(albums);
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
