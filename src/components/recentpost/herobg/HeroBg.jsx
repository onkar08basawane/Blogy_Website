import React from 'react';
import styles from './Hero.module.css';

const HeroBg = () => {
  return (
    <div className={styles.mainhero}>
      <div className={styles.contentWrapper}>
        <div className={styles.maintext}>
          See Our <br /><strong>Recent Posts</strong>
        </div>
        <div className={styles.mainimg}>
          <img src='./new design.jpg' alt="Blog background" />
        </div>
      </div>
    </div>
  );
};

export default HeroBg;