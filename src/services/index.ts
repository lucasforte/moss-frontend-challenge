import axios from "axios";
import { IFeed, MediaType } from "../Types";

export default class Services {
  static getAlbuns = async (): Promise<IFeed> => {
    try {
      const response = await axios.get(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      );
      const data = response.data.feed;

      return data;
    } catch (error) {
      return error.message;
    }
  };

  static getSearchResults = async (
    term: string,
    mediaType: MediaType
  ): Promise<any> => {
    try {
      const response = await axios.post(
        `https://itunes.apple.com/search?term=${term}&media=${mediaType}`
      );

      const data = response.data.results;
      return data;
    } catch (error) {
      return error.message;
    }
  };
}
