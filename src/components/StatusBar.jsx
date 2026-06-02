import React from 'react'
import styles from './StatusBar.module.css'

export default function StatusBar({ onSwitch }) {
  return (
    <div className={styles.statusbar}>
      <div className={styles.item}>⑂ main</div>
      <div className={styles.item}>● 0 errors, 0 warnings</div>
      <div className={styles.right}>
        <div className={styles.item}>AVAILABLE_JUL_2026</div>
        <div className={styles.item}>MELBOURNE · AEST</div>
        <div className={styles.item}>UTF-8</div>
        <div
          className={styles.hireBtn}
          onClick={() => onSwitch('contact')}
        >
          ./hire_me.sh
        </div>
      </div>
    </div>
  )
}
