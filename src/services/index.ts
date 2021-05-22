import axios from "axios";

export async function getAlbuns(): Promise<any> {
  try {
    const albuns = await axios.get(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );

    return albuns;
  } catch (error) {
    return error.message;
  }
}
