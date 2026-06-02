import React from 'react'
import styles from './MenuBar.module.css'

const ITEMS = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help']

export default function MenuBar() {
  return (
    <div className={styles.menubar}>
      {ITEMS.map(item => (
        <div key={item} className={styles.item}>{item}</div>
      ))}
    </div>
  )
}
