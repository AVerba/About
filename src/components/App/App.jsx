import styles from './App.module.scss'
import {useContext} from "react";
import GlobalContext from "../../context/GlobalContext";

import cx from 'classnames';
import {ToggleTheme} from "../ToggleTheme";

export const App = () => {
  const {selectedTheme} = useContext(GlobalContext);
  const classList = cx(styles.main, selectedTheme === "dark" ? styles.dark : styles.white);


  return (
    <>
      <ToggleTheme/>
      <div className={classList}>
        About me
        <></>
      </div>
    </>

  );
};
