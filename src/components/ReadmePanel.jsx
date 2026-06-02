import React from 'react'
import styles from './panels.module.css'

export default function ReadmePanel({ onSwitch }) {
  return (
    <div className={styles.readmePanel}>
      <div className={styles.status}>
        <span className={styles.statusDot}></span>
        STATUS: OPEN_TO_GRAD_ROLES · JUL 2026
      </div>

      <h1 className={styles.h1}>
        Curiosity got me into<br />
        Computer Science.<br />
        <span className={styles.hlTeal}>Building</span> keeps me there.
      </h1>

      <p className={styles.readmeQuestion}>
        Most of my projects start the same way: stumbling across something interesting and refusing to stop until I understand how it works.
      </p>

      <div className={styles.btns}>
        <button className={styles.btnPrimary} onClick={() => onSwitch('projects')}>View Projects</button>
        <button className={styles.btnGhost} onClick={() => onSwitch('contact')}>Get in touch</button>
      </div>

      <div className={styles.constBlock}>
        <span style={{color:'var(--blue2)'}}>const</span> <span style={{color:'var(--param)'}}>kannan</span> <span style={{color:'var(--text-dim)'}}>= {'{'}</span>{'\n'}
        {'  '}<span style={{color:'var(--param)'}}>name</span><span style={{color:'var(--text-dim)'}}>:</span>         <span style={{color:'var(--orange)'}}>{"\"Kannan Arora\""}</span><span style={{color:'var(--text-dim)'}}>,</span>{'\n'}
        {'  '}<span style={{color:'var(--param)'}}>university</span><span style={{color:'var(--text-dim)'}}>:</span>    <span style={{color:'var(--orange)'}}>{"\"RMIT Melbourne\""}</span><span style={{color:'var(--text-dim)'}}>,</span>{'\n'}
        {'  '}<span style={{color:'var(--param)'}}>graduating</span><span style={{color:'var(--text-dim)'}}>:</span>    <span style={{color:'var(--orange)'}}>{"\"July 2026\""}</span><span style={{color:'var(--text-dim)'}}>,</span>{'\n'}
        {'  '}<span style={{color:'var(--param)'}}>curiosity</span><span style={{color:'var(--text-dim)'}}>:</span>     <span style={{color:'var(--orange)'}}>{"\"high\""}</span><span style={{color:'var(--text-dim)'}}>,</span>{'\n'}
        {'  '}<span style={{color:'var(--param)'}}>ideas</span><span style={{color:'var(--text-dim)'}}>:</span>         <span style={{color:'var(--orange)'}}>{"\"too many\""}</span><span style={{color:'var(--text-dim)'}}>,</ span>{'\n'}
        {'  '}<span style={{color:'var(--param)'}}>comfortZone</span><span style={{color:'var(--text-dim)'}}>:</ span>   <span style={{color:'var(--orange)'}}>{"\"constantly expanding\""}</ span><span style={{color:'var(--text-dim)'}}>,</ span>{'\n'}
        {'  '}<span style={{color:'var(--param)'}}>available</ span><span style={{color:'var(--text-dim)'}}>:</ span>     <span style={{color:'var(--blue2)'}}>true</ span><span style={{color:'var(--text-dim)'}}>,</ span>{'\n'}
      < span style={{color:'var(--text-dim)'}}>{'}'}</ span>
      </div>
    </div>
  )
}