import React from 'react'
import styles from './ActivityBar.module.css'

export default function ActivityBar({ onToggle, isMobile }) {
  return (
    <div className={`${styles.activitybar} ${isMobile ? styles.activitybarMobile : ''}`}>
      <div
        className={`${styles.icon} ${styles.active}`}
        title="Explorer"
        role="button"
        tabIndex={0}
        onClick={() => onToggle && onToggle()}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onToggle && onToggle() }}
      >
        ▤
      </div>
    </div>
  )
}