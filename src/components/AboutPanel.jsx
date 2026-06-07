import React, { useState } from 'react'
import styles from './panels.module.css'
import { TIMELINE, ABOUT_INTERESTS, CAREER_LOG, CERTIFICATIONS } from '../data.js'

const LINKEDIN_CERTS =
  'https://www.linkedin.com/in/kannan-arora-6850b5285/details/certifications/'

const TYPE_COLORS = {
  feat:  '#9ece6a',
  fix:   '#f7768e',
  chore: '#7a829f',
  init:  '#bb9af7',
}

const INTEREST_COLORS = ['#c4b5fd', '#93c5fd', '#fcd34d', '#67e8f9']

export default function AboutPanel() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className={styles.aboutPanel}>
      <div className={styles.panelTitle}>about.ts</div>

      <p className={styles.aboutPitch}>
        The README is the quick intro. This is where I keep study, roles, and certifications
        in one place.
      </p>

      <section className={styles.aboutBlock}>
        <h2 className={styles.aboutBlockTitle}>Interests</h2>
        <ul className={styles.aboutCuriosityList}>
          {ABOUT_INTERESTS.map((item, i) => (
            <li key={item.topic} className={styles.aboutCuriosityItem}>
              <span
                className={styles.aboutCuriosityTopic}
                style={{ color: INTEREST_COLORS[i] }}
              >
                {item.topic}
              </span>
              <p className={styles.aboutCuriosityNote}>{item.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.aboutBlock}>
        <h2 className={styles.aboutBlockTitle}>Work & education</h2>
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
          <h2 className={styles.aboutBlockTitle}>Certifications</h2>
          <a
            href={LINKEDIN_CERTS}
            target="_blank"
            rel="noreferrer"
            className={styles.aboutLink}
          >
            All on LinkedIn →
          </a>
        </div>
        <div className={styles.certGrid}>
          {CERTIFICATIONS.map((cert) => {
            const inner = (
              <>
                <span className={styles.certName}>{cert.name}</span>
                <span className={styles.certMeta}>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                  <span className={styles.certYear}> · {cert.year}</span>
                </span>
                {cert.url && (
                  <span className={styles.certVerify}>View credential →</span>
                )}
              </>
            )
            return cert.url ? (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className={`${styles.certCard} ${styles.certCardLink}`}
              >
                {inner}
              </a>
            ) : (
              <div key={cert.name} className={styles.certCard}>
                {inner}
              </div>
            )
          })}
        </div>
      </section>

      <section className={styles.aboutBlock}>
        <div className={styles.aboutBlockHead}>
          <h2 className={styles.aboutBlockTitle}>Career timeline</h2>
          <span className={styles.aboutBlockHint}>click a row for detail</span>
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
                <span className={styles.commitHash}>{commit.hash}</span>
                <span className={styles.commitDate}>{commit.date}</span>
                <span
                  className={styles.commitType}
                  style={{ color: TYPE_COLORS[commit.type] }}
                >
                  {commit.type}
                </span>
                <span className={styles.commitMsg}>{commit.message}</span>
                <div className={styles.commitEnd}>
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
