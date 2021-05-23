export interface IFeed {
  author: { name: { label: string }; uri: { label: string } };
  entry: object[];
  icon: { label: string };
  id: { label: string };
  link: { attributes: { rel: string; type: string; href: string } }[];
  rights: { label: string };
  title: { label: string };
  updated: { label: string };
}

export interface IAlbum {
  category: {
    attributes: {
      [id: string]: string;
      label: string;
      scheme: string;
      term: string;
    };
  };
  id: { attributes: { id: string; label: string } };
}

export interface IAlbumCategory {}
