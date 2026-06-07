import React from 'react'
import styles from './panels.module.css'
import { FILES } from '../data.js'

const NAV = FILES.filter((f) => f.id !== 'readme')

export default function ReadmePanel({ onSwitch }) {
  return (
    <div className={styles.readmePanel}>
      <div className={styles.panelTitle}>README.md</div>

      <header className={styles.readmeHero}>
        <div className={styles.readmeHeroRow}>
          <div className={styles.readmePortrait}>
            <img
              src="/avatar.png"
              alt="Kannan Arora"
              className={styles.readmePortraitImg}
            />
          </div>
          <div className={styles.readmeHeroText}>
            <div className={styles.status}>
              <span className={styles.statusDot} />
              Open to internship & grad roles
            </div>
            <h1 className={styles.h1}>
              Kannan Arora<span className={styles.readmeDot}>.</span>
            </h1>
            <p className={styles.readmeRole}>
              CS (Professional) · <strong>RMIT Melbourne</strong>
            </p>
            <p className={styles.readmePitch}>
              Most days you&apos;ll find me writing code, testing ideas, or getting distracted
              by an interesting technical problem. Strong interest in software, AI, and
              building things that are fun, useful, or ideally both.
            </p>
          </div>
        </div>
      </header>

      <div className={styles.readmeCtaRow}>
        <button
          type="button"
          className={styles.btnPrimary}
          onClick={() => onSwitch('projects')}
        >
          View GitHub projects
        </button>
        <button
          type="button"
          className={styles.btnGhost}
          onClick={() => onSwitch('about')}
        >
          Background & experience
        </button>
        <button
          type="button"
          className={styles.btnGhost}
          onClick={() => onSwitch('contact')}
        >
          Contact me
        </button>
      </div>

      <section className={styles.readmeSection}>
        <h2 className={styles.readmeSectionTitle}>Explore portfolio</h2>
        <nav className={styles.readmeFileGrid} aria-label="Portfolio sections">
          {NAV.map((file) => (
            <button
              key={file.id}
              type="button"
              className={styles.readmeFileCard}
              onClick={() => onSwitch(file.id)}
            >
              <span
                className={styles.readmeFileIcon}
                style={{
                  color: file.color,
                  background: `${file.color}14`,
                  borderColor: `${file.color}28`,
                }}
              >
                {file.icon}
              </span>
              <span className={styles.readmeFileMeta}>
                <span className={styles.readmeFileName} style={{ color: file.color }}>
                  {file.name}
                </span>
                <span className={styles.readmeFileHint}>{file.hint}</span>
              </span>
              <span className={styles.readmeFileArrow}>→</span>
            </button>
          ))}
        </nav>
      </section>
    </div>
  )
}
