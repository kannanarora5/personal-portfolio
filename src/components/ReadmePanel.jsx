import React from 'react'
import styles from './panels.module.css'

export default function ReadmePanel({ onSwitch }) {
  return (
    <div className={styles.readmePanel}>
      <div className={styles.status}>
        <span className={styles.statusDot}></span>
        open to grad & internship roles · jul 2026
      </div>

      <h1 className={styles.h1}>
        Kannan Arora.
      </h1>

      <p className={styles.sub}>
        Software developer · full-stack, cloud, ML · RMIT Melbourne
      </p>

      <p className={styles.sub} style={{ marginTop: '-20px' }}>
        I'm genuinely curious, and that's mostly why I'm here. Most of the projects in this portfolio started the same way, I found something interesting and couldn't leave it alone until I understood how it worked. The technologies change. That part doesn't.
      </p>

      <div className={styles.btns}>
        <button className={styles.btnPrimary} onClick={() => onSwitch('projects')}>
          see what I've built
        </button>
        <button className={styles.btnGhost} onClick={() => onSwitch('contact')}>
          get in touch
        </button>
      </div>
    </div>
  )
}