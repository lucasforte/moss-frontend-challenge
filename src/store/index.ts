import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class GeneralStore {
  theme = "light";

  constructor() {
    makeAutoObservable(this);
  }

  setTheme = (theme: string) => {
    this.theme = theme;
  };
}

export const GeneralStoreContext = createContext(new GeneralStore());
