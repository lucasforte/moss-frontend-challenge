import React, { FC, useContext, useState } from "react";
import { observer } from "mobx-react";
import { SearchOutlined } from "@ant-design/icons";
import { GeneralStoreContext } from "../../store";

import "./styles.scss";

const SearchInput: FC = observer(() => {
  const generalStore = useContext(GeneralStoreContext);

  const { searchValue, setSearchValue } = generalStore;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`search-input ${isFocused && "search-input--focused"}`}>
      <span className="search-input__placeholder">
        Search by artist or album
      </span>
      <input
        type="text"
        value={searchValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => !searchValue && setIsFocused(false)}
        onChange={({ target: { value } }) => setSearchValue(value)}
      />
      <SearchOutlined />
    </div>
  );
});

export default SearchInput;
