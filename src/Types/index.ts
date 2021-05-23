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
    attributes: { term: string; label: string };
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

export interface IMedia {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  country: string;
  currency: string;
  discCount: number;
  discNumber: number;
  isStreamable: boolean;
  kind: string;
  previewUrl: string;
  primaryGenreName: string;
  releaseDate: Date;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackId: number;
  trackName: string;
  trackNumber: number;
  trackPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
}

export enum MediaType {
  music = "music",
  musicVideo = "musicVideo",
  movie = "movie",
  podcast = "podcast",
  audiobook = "audiobook",
  shortFilm = "shortFilm",
  tvShow = "tvShow",
  software = "software",
  ebook = "ebook",
  all = "all",
}
