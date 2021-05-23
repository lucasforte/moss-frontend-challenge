import { observer } from "mobx-react";
import { FC, useContext } from "react";
import { GeneralStoreContext } from "../../store";
import "./styles.scss";

interface IProps {
  children: React.ReactNode;
}

const PageContainer: FC<IProps> = observer((props) => {
  const { children } = props;
  const generalStore = useContext(GeneralStoreContext);

  return (
    <div className={`page-container page-container--${generalStore.theme}`}>
      {children}
    </div>
  );
});

export default PageContainer;
