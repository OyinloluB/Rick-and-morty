import React from "react";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";

import Styles from "./main.module.scss";

const Main = () => {
  return (
    <div className={Styles.main}>
      <span className={Styles.main__title}>Rick and Morty</span>
      <div className={Styles.main__themeSwitcher}>
        <Brightness2OutlinedIcon className={Styles.main__icon} />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Main;
