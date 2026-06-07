import React from 'react'
import styles from './panels.module.css'

const LINKS = [
  {
    id: 'email',
    href: 'mailto:kannanarora1143@gmail.com',
    icon: '✉',
    iconColor: '#fde68a',
    iconBg: 'rgba(253, 224, 71, 0.14)',
    iconBorder: 'rgba(253, 224, 71, 0.35)',
    label: 'Email',
    value: 'kannanarora1143@gmail.com',
    arrow: '↗',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/kannan-arora-6850b5285/',
    icon: 'in',
    iconColor: '#93c5fd',
    iconBg: 'rgba(59, 130, 246, 0.18)',
    iconBorder: 'rgba(147, 197, 253, 0.4)',
    iconStyle: { fontSize: 12, fontWeight: 700 },
    label: 'LinkedIn',
    value: 'linkedin.com/in/kannan-arora-6850b5285',
    arrow: '↗',
    target: '_blank',
  },
  {
    id: 'github',
    href: 'https://github.com/kannanarora5',
    icon: '</>',
    iconColor: '#f4f4f5',
    iconBg: 'rgba(244, 244, 245, 0.08)',
    iconBorder: 'rgba(212, 212, 216, 0.35)',
    iconStyle: { fontFamily: 'var(--font-mono)', fontSize: 11 },
    label: 'GitHub',
    value: 'github.com/kannanarora5',
    arrow: '↗',
    target: '_blank',
  },
  {
    id: 'resume',
    href: '/resume.pdf',
    download: 'Kannan-resume.pdf',
    icon: 'CV',
    iconColor: '#c4b5fd',
    iconBg: 'rgba(196, 181, 253, 0.14)',
    iconBorder: 'rgba(196, 181, 253, 0.38)',
    iconStyle: { fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600 },
    label: 'Resume',
    value: 'Kannan-resume.pdf',
    arrow: '↓',
  },
]

export default function ContactPanel() {
  return (
    <div className={styles.contactPanel}>
      <div className={styles.panelTitle}>contact.sh</div>

      <div className={styles.shBlock}>
        <div className={styles.shHeader}>contact.sh · bash</div>
        <div className={styles.shBody}>
          <span className={styles.shComment}>#!/bin/bash</span>{'\n'}
          <span className={styles.shComment}># Kannan Arora · Melbourne, VIC</span>{'\n'}
          <span className={styles.shComment}># open to grad/internship roles · hybrid or remote</span>{'\n'}
          {'\n'}
          <span className={styles.shVar}>LOCATION</span>=<span className={styles.shStr}>"Melbourne, VIC"</span>{'\n'}
          <span className={styles.shVar}>STATUS</span>=<span className={styles.shStr}>"open to roles"</span>{'\n'}
          {'\n'}
          <span className={styles.shCmd}>echo</span> <span className={styles.shStr}>"Pick a channel below"</span>
        </div>

        {LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            download={link.download}
            target={link.target}
            rel={link.target ? 'noreferrer' : undefined}
            className={styles.shLink}
          >
            <div
              className={styles.shLinkIcon}
              style={{
                color: link.iconColor,
                background: link.iconBg,
                borderColor: link.iconBorder,
                ...link.iconStyle,
              }}
            >
              {link.icon}
            </div>
            <div>
              <div className={styles.shLinkLabel}>{link.label}</div>
              <div className={styles.shLinkValue}>{link.value}</div>
            </div>
            <div className={styles.shLinkArrow}>{link.arrow}</div>
          </a>
        ))}

        <div className={styles.availBar}>
          <div className={styles.availDot} />
          Melbourne, VIC · Open to hybrid and remote
        </div>
      </div>
    </div>
  )
}
