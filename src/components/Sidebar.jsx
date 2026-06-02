import React from 'react'
import { FILES } from '../data.js'
import styles from './Sidebar.module.css'

export default function Sidebar({ activeTab, onSwitch }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>Explorer</div>

      <div className={styles.section}>
        <span className={styles.chevron}>▼</span>
        <span className={styles.sectionName}>~/portfolio</span>
      </div>

      <div className={styles.fileList}>
        {FILES.map(f => (
          <div
            key={f.id}
            id={`fi-${f.id}`}
            className={`${styles.fileItem} ${activeTab === f.id ? styles.active : ''}`}
            onClick={() => onSwitch(f.id)}
          >
            <span className={styles.fileIcon} style={{ color: f.color }}>{f.icon}</span>
            <span className={styles.fileName}>{f.name}</span>
          </div>
        ))}
      </div>

    </div>
  )
}