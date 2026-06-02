import React from 'react'
import styles from './ActivityBar.module.css'

export default function ActivityBar() {
  return (
    <div className={styles.activitybar}>
      <div className={`${styles.icon} ${styles.active}`} title="Explorer">
        ▤
      </div>
      <div className={styles.icon} style={{ marginTop: 'auto' }} title="Settings">
        ✦
      </div>
    </div>
  )
}