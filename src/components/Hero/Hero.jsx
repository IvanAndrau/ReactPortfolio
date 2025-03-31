import React from 'react'
import styles from './Hero.module.css'
import profileImage from '../../../assets/hero/heroImage.png'

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ivan</h1>
        <p className={styles.description}>
          I'm a Full Stack Developer with 5 years of experience using React and NodeJS.
          I'm a Full Stack Developer mainly working with React and .NET 
          I'm a Backend Developer specializing in C# and expanding my skills in React for full-stack development.
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
