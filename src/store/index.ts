import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { IAlbum } from "../Types";

class GeneralStore {
  theme = "light";
  onlyFavorites = false;
  isLoading = true;
  albumsData: IAlbum[] = [];
  favoriteAlbums: IAlbum[] = [];
  searchValue = ``;

  constructor() {
    makeAutoObservable(this);
  }

  setTheme = (theme: string) => {
    this.theme = theme;
  };

  setOnlyFavorites = (onlyFavorite: boolean) => {
    this.onlyFavorites = onlyFavorite;
  };

  setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  setAlbums = (albums: IAlbum[]) => {
    this.albumsData = albums;
  };

  setInitialFavorites = (albums: IAlbum[]) => {
    if (albums) {
      this.favoriteAlbums = albums;
    }
  };

  setFavoriteAlbums = (album?: IAlbum) => {
    if (album) {
      const favoritesFilter = this.favoriteAlbums.filter(
        (fav) => fav.id.label === album.id.label
      );
      const currFav = this.favoriteAlbums;

      if (favoritesFilter && favoritesFilter.length > 0) {
        currFav.forEach((fav, index) => {
          if (fav.id.label === favoritesFilter[0].id.label) {
            currFav.splice(index, 1);
          }
        });
      } else {
        currFav.push(album);
        this.favoriteAlbums = currFav;

        localStorage.setItem(
          "@myfav:albums",
          JSON.stringify(this.favoriteAlbums)
        );
      }
    }
  };

  setSearchValue = (searchValue: string) => {
    this.searchValue = searchValue;
  };
}

export const GeneralStoreContext = createContext(new GeneralStore());
