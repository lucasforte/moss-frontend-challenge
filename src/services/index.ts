import axios from "axios";
import { IFeed } from "../Types";

export async function getAlbuns(): Promise<IFeed> {
  try {
    const response = await axios.get(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );
    const data = response.data.feed;

    return data;
  } catch (error) {
    return error.message;
  }
}
