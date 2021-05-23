export interface IFeed {
  author: { name: { label: string }; uri: { label: string } };
  entry: IAlbum[];
  icon: { label: string };
  id: { label: string };
  link: { attributes: { rel: string; type: string; href: string } }[];
  rights: { label: string };
  title: { label: string };
  updated: { label: Date };
}

export interface IAlbum {
  category: {
    attributes: {
      "im:id": string;
      label: string;
      scheme: string;
      term: string;
    };
  };
  id: { attributes: { "im:id": string }; label: string };
  "im:artist": { label: string; attributes: { href: string } };
  "im:contentType": {
    "im:contentType": { attributes: { term: string; label: string } };
    attributes: { term: "Music"; label: "Music" };
  };
  "im:image": { attributes: { height: number }; label: string }[];
  "im:itemCount": { label: number };
  "im:name": { label: string };
  "im:price": {
    label: string;
    attributes: { amount: number; currency: string };
  };
  "im:releaseDate": { label: Date; attributes: { label: string } };
  link: { attributes: { href: string; rel: string; type: string } };
  rights: { label: string };
  title: { label: string };
}
