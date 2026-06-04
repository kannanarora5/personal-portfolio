import React from 'react'
import styles from './panels.module.css'

const LINKS = [
  {
    href: 'mailto:kannanarora1143@gmail.com',
    icon: '✉',
    label: 'Email',
    value: 'kannanarora1143@gmail.com',
    arrow: '↗',
  },
  {
    href: 'https://www.linkedin.com/in/kannan-arora-6850b5285/',
    icon: 'in',
    iconStyle: { fontSize: 12, fontWeight: 700 },
    label: 'LinkedIn',
    value: 'linkedin.com/in/kannan-arora-6850b5285',
    arrow: '↗',
    target: '_blank',
  },
  {
    href: 'https://github.com/kannanarora5',
    icon: '</>',
    iconStyle: { fontFamily: 'var(--font-mono)', fontSize: 11 },
    label: 'GitHub',
    value: 'github.com/kannanarora5',
    arrow: '↗',
    target: '_blank',
  },
  {
    href: '#',
    icon: 'CV',
    iconStyle: { fontFamily: 'var(--font-mono)', fontSize: 11 },
    label: 'Resume',
    value: 'Download PDF',
    arrow: '↓',
  },
]

export default function ContactPanel() {
  return (
    <div className={styles.contactPanel}>
      <div className={styles.panelTitle}>contact.sh</div>
      <div className={styles.shBlock}>
        <div className={styles.shHeader}>contact.sh — bash</div>
        <div className={styles.shBody}>
          <span className={styles.shComment}>#!/bin/bash</span>{'\n'}
          <span className={styles.shComment}># Kannan Arora — open to grad/internship roles from Jul 2026</span>{'\n'}
          <span className={styles.shComment}># Melbourne, VIC · open to hybrid and remote</span>{'\n'}
          {'\n'}
          <span className={styles.shVar}>ROLE</span>=<span className={styles.shStr}>"SWE | ML/AI | Cloud Engineering"</span>{'\n'}
          <span className={styles.shVar}>STATUS</span>=<span className={styles.shStr}>"actively looking"</span>{'\n'}
          {'\n'}
          <span className={styles.shCmd}>echo</span> <span className={styles.shStr}>"Reach out via any channel below"</span>
        </div>

        {LINKS.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target={link.target}
            rel={link.target ? 'noreferrer' : undefined}
            className={styles.shLink}
          >
            <div className={styles.shLinkIcon} style={link.iconStyle}>{link.icon}</div>
            <div>
              <div className={styles.shLinkLabel}>{link.label}</div>
              <div className={styles.shLinkValue}>{link.value}</div>
            </div>
            <div className={styles.shLinkArrow}>{link.arrow}</div>
          </a>
        ))}

        <div className={styles.availBar}>
          <div className={styles.availDot} />
          Available Jul 2026 · Melbourne, VIC · Open to hybrid and remote
        </div>
      </div>
    </div>
  )
}
