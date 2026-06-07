import React from 'react'
import styles from './StatusBar.module.css'

export default function StatusBar({ onSwitch }) {
  return (
    <div className={styles.statusbar}>
      <div className={`${styles.item} ${styles.hideMobile}`}>⑂ main</div>
      <div className={`${styles.item} ${styles.hideMobile}`}>● 0 errors, 0 warnings</div>
      <div className={styles.right}>
        <div className={`${styles.item} ${styles.hideMobile}`}>OPEN_TO_ROLES</div>
        <div className={`${styles.item} ${styles.hideNarrow}`}>MELBOURNE · AEST</div>
        <div className={`${styles.item} ${styles.hideMobile}`}>UTF-8</div>
        <div
          className={styles.hireBtn}
          onClick={() => onSwitch('contact')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onSwitch('contact')
          }}
        >
          ./hire_me.sh
        </div>
      </div>
    </div>
  )
}
