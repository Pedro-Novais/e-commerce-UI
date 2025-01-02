import React from "react";
import styles from './Loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;