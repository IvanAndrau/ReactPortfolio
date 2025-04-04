import React from 'react'
import styles from './About.module.css'
import aboutImage from '../../../assets/about/aboutImage.png'
import cursorIcon from '../../../assets/about/cursorIcon.png'
import serverIcon from '../../../assets/about/serverIcon.png'
import uiIcon from '../../../assets/about/uiIcon.png'


const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
      <img 
      src={aboutImage} 
      alt="Me shitting with a laptop"
      className={styles.aboutImage}
      />

      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={serverIcon} alt="Server icon" />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>I'm a back-end developer with experience developing fast and optimised back-end systems and APIs</p>
          </div>
        </li>

        <li className={styles.aboutItem}>
          <img src={cursorIcon} alt="Cursor icon" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>I have experience in building responsive and optimized sites</p>
          </div>
        </li>

        <li className={styles.aboutItem}>
          <img src={uiIcon} alt="UI icon" />
          <div className={styles.aboutItemText}>
            <h3>Database Engineer</h3>
            <p>I have Experience working with SQL Server, MySQL and PostreSQL, designing efficient database schemas</p>
          </div>
        </li>

      </ul>
      </div>
      <div>
        
      </div>
    </section>
  )
}

export default About
