import React from 'react'
import { FILES } from '../data.js'
import styles from './TabBar.module.css'

export default function TabBar({ activeTab, onSwitch, openTabs, onClose }) {
  return (
    <div className={styles.tabs}>
      {FILES.filter(f => openTabs.includes(f.id)).map(f => (
        <div
          key={f.id}
          className={`${styles.tab} ${activeTab === f.id ? styles.active : ''}`}
          onClick={() => onSwitch(f.id)}
        >
          <div className={styles.dot} style={{ background: f.color }} />
          <span className={styles.name}>{f.name}</span>
          <span
            className={styles.close}
            onClick={(e) => { e.stopPropagation(); onClose(f.id) }}
          >×</span>
        </div>
      ))}
    </div>
  )
}