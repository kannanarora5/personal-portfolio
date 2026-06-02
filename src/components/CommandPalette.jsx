import React, { useState, useEffect, useRef } from 'react'
import { FILES } from '../data.js'
import styles from './CommandPalette.module.css'

export default function CommandPalette({ open, onClose, onSwitch }) {
  const [query, setQuery] = useState('')
  const [sel, setSel] = useState(0)
  const inputRef = useRef(null)

  const filtered = FILES.filter(f =>
    !query.trim() ||
    f.name.toLowerCase().includes(query.toLowerCase()) ||
    f.hint.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    if (open) {
      setQuery('')
      setSel(0)
      setTimeout(() => inputRef.current?.focus(), 30)
    }
  }, [open])

  useEffect(() => { setSel(0) }, [query])

  useEffect(() => {
    const handler = (e) => {
      if (!open) return
      if (e.key === 'Escape') { e.preventDefault(); onClose() }
      if (e.key === 'ArrowDown') { e.preventDefault(); setSel(s => Math.min(s + 1, filtered.length - 1)) }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSel(s => Math.max(s - 1, 0)) }
      if (e.key === 'Enter' && filtered[sel]) { e.preventDefault(); onSwitch(filtered[sel].id); onClose() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, sel, filtered, onClose, onSwitch])

  if (!open) return null

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.box}>
        <input
          ref={inputRef}
          className={styles.input}
          placeholder="Go to file…  (try: about, projects, stack, contact)"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoComplete="off"
        />
        <div className={styles.list}>
          {filtered.length ? filtered.map((f, i) => (
            <div
              key={f.id}
              className={`${styles.item} ${i === sel ? styles.sel : ''}`}
              onClick={() => { onSwitch(f.id); onClose() }}
              onMouseEnter={() => setSel(i)}
            >
              <span className={styles.icon}>{f.icon}</span>
              <span>{f.name}</span>
              <span className={styles.hint}>{f.hint}</span>
            </div>
          )) : (
            <div className={styles.item} style={{ opacity: .5 }}>No matches</div>
          )}
        </div>
      </div>
    </div>
  )
}
