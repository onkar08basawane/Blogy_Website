import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.mainhero}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <div className={styles.artical}>
            <strong>Hey, we're Blogy.</strong> See <br/>our thoughts, stories and<br/> ideas.
          </div>

          <div className={styles.input}>
            <div className={styles.text}>
                <input 
                  type='email' 
                  name='email' 
                  placeholder='Your Email Address'
                  className={styles.emailInput}
                />
                <button className={styles.subscribe}>Subscribe</button>
            </div>
            <div className={styles.note}>
                Get the email newsletter and unlock access to
                <br/>
                members-only content and updates.
            </div>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <img 
            src="./background_img.jpg" 
            alt="Blogy content" 
            className={styles.heroImage}
          />
        </div>
      </div>
      <div className={styles.bottomline}></div>
    </div>
  )
}

export default Hero;