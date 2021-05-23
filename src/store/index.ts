import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { IAlbum } from "../Types";

class GeneralStore {
  theme = "light";
  isLoading = true;
  albumsData: IAlbum[] = [];
  searchValue = ``;

  constructor() {
    makeAutoObservable(this);
  }

  setTheme = (theme: string) => {
    this.theme = theme;
  };

  setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  setAlbums = (albums: IAlbum[]) => {
    this.albumsData = albums;
  };

  setSearchValue = (searchValue: string) => {
    this.searchValue = searchValue;
  };
}

export const GeneralStoreContext = createContext(new GeneralStore());
