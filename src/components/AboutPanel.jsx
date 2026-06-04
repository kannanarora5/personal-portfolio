import React, { useState } from 'react'
import styles from './panels.module.css'
import { TIMELINE, ABOUT_CURIOSITIES, CAREER_LOG } from '../data.js'

const TYPE_COLORS = {
  feat:  '#9ece6a',
  fix:   '#f7768e',
  chore: '#7a829f',
  init:  '#bb9af7',
}

export default function AboutPanel() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className={styles.aboutPanel}>
      <div className={styles.panelTitle}>about.ts</div>

      <p className={styles.aboutPitch}>
        Beyond the repos in <strong>projects.tsx</strong>, this page is where I keep roles,
        timelines, and the kinds of problems I naturally drift toward — less elevator pitch,
        more context.
      </p>

      <section className={styles.aboutBlock}>
        <h2 className={styles.aboutBlockTitle}>What I gravitate toward</h2>
        <ul className={styles.aboutCuriosityList}>
          {ABOUT_CURIOSITIES.map((item) => (
            <li key={item.topic} className={styles.aboutCuriosityItem}>
              <span className={styles.aboutCuriosityTopic}>{item.topic}</span>
              <p className={styles.aboutCuriosityNote}>{item.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.aboutBlock}>
        <h2 className={styles.aboutBlockTitle}>Experience</h2>
        <div className={styles.timeline}>
          {TIMELINE.map((item, i) => (
            <div key={i} className={styles.tlItem}>
              <div className={styles.tlDotCol}>
                <div className={styles.tlDot} />
                {item.hasLine && <div className={styles.tlLine} />}
              </div>
              <div className={styles.tlBody}>
                <div className={styles.tlTitle}>{item.title}</div>
                <div className={styles.tlOrg}>{item.org}</div>
                <div className={styles.tlDesc}>{item.desc}</div>
              </div>
              <div className={styles.tlDate}>{item.date}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.aboutBlock}>
        <div className={styles.aboutBlockHead}>
          <h2 className={styles.aboutBlockTitle}>Career timeline</h2>
          <span className={styles.aboutBlockHint}>Roles & milestones — click for detail</span>
        </div>

        <div className={styles.gitLog}>
          <div className={styles.gitLogHeader}>
            <span className={styles.gitLogCmd}>git log --oneline</span>
            <span className={styles.gitLogBranch}>life@rmit</span>
          </div>

          {CAREER_LOG.map((commit, i) => (
            <div
              key={commit.hash}
              className={`${styles.commitRow} ${expanded === i ? styles.commitExpanded : ''}`}
              onClick={() => setExpanded(expanded === i ? null : i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setExpanded(expanded === i ? null : i)
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className={styles.commitMain}>
                <span className={styles.commitDate}>{commit.date}</span>
                <span
                  className={styles.commitType}
                  style={{ color: TYPE_COLORS[commit.type] }}
                >
                  {commit.type}
                </span>
                <span className={styles.commitMsg}>{commit.message}</span>
                {commit.tag && (
                  <span
                    className={styles.commitTag}
                    style={{ borderColor: commit.tagColor, color: commit.tagColor }}
                  >
                    {commit.tag}
                  </span>
                )}
                <span className={styles.commitChevron}>{expanded === i ? '▾' : '▸'}</span>
              </div>

              {expanded === i && commit.body && (
                <div className={styles.commitBody}>
                  <p>{commit.body}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
