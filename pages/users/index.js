import React from "react";
import AppHeader from "../../comonents/Header";
import UserRegister from "../../comonents/userRegisterForm";
import styles from "../../styles/Home.module.css";

const index = () => {
  return (
    <div>
      <div className={styles.main}>
        <AppHeader />
        <UserRegister />
      </div>
    </div>
  );
};

export default index;
