import React, { useState } from 'react'
import { FILES } from '../data.js'
import styles from './Sidebar.module.css'

export default function Sidebar({ activeTab, onSwitch, visible = true }) {
  const [sectionOpen, setSectionOpen] = useState(true)

  return (
    <div className={`${styles.sidebar} ${visible ? styles.open : styles.hidden} ${!sectionOpen ? styles.collapsed : ''}`}>
      <div className={styles.header}>Explorer</div>

      <div className={styles.section} onClick={() => setSectionOpen(s => !s)} role="button" tabIndex={0}>
        <span className={styles.chevron}>{sectionOpen ? '▼' : '▸'}</span>
        <span className={styles.sectionName}>~/portfolio</span>
      </div>

      <div className={styles.fileList}>
        {sectionOpen && FILES.map(f => (
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