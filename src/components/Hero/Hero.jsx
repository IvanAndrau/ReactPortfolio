import React from 'react'
import styles from './Hero.module.css'
import profileImage from '../../../assets/hero/heroImage.png'

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ivan</h1>
        <p className={styles.description}>
          I'm a Full Stack Developer working with .NET on the backend while continuously perfecting my skills in React.
          </p>
          <p className={styles.description}>
            Reach out if you'd like to learn more
            </p>
          <a href="mailto:ivan.andrau@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={profileImage} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
