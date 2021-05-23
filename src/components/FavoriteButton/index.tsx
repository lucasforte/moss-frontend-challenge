import React, { FC } from "react";
import { HeartTwoTone } from "@ant-design/icons";
import "./styles.scss";

const FavoriteButton: FC = () => {
  return (
    <button>
      <HeartTwoTone twoToneColor={`#bbb`} />
    </button>
  );
};

export default FavoriteButton;
