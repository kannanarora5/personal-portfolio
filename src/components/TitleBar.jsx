import React from 'react'
import styles from './TitleBar.module.css'

export default function TitleBar() {
  return (
    <div className={styles.titlebar}>
      <div className={styles.dots}>
        <div className={styles.dot} style={{ background: '#ff5f57' }} />
        <div className={styles.dot} style={{ background: '#ffbd2e' }} />
        <div className={styles.dot} style={{ background: '#28ca40' }} />
      </div>
      <span className={styles.name}>kannan-portfolio — VS Code</span>
    </div>
  )
}
