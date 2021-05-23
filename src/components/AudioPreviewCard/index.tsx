import { FC } from "react";
import "./styles.scss";

interface IProps {
  trackName: string;
  previewUrl: string;
}

const AudioPreviewCard: FC<IProps> = (props) => {
  const { trackName, previewUrl } = props;

  return (
    <div className="audio-card">
      <p>{trackName}</p>
      <audio src={previewUrl} controls></audio>
    </div>
  );
};

export default AudioPreviewCard;
