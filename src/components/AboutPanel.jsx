import React, { useState } from 'react'
import styles from './panels.module.css'

const COMMITS = [
  {
    hash: 'a3f9c2e',
    date: 'Jul 2026',
    type: 'feat',
    message: 'graduating CS (Advanced) @ RMIT — seeking internship & grad roles',
    body: 'Final-year Computer Science (Advanced) student. Open to SWE, ML/AI, and Cloud Engineering roles in Melbourne or remote.',
    tag: 'milestone',
    tagColor: '#9ece6a',
  },
  {
    hash: 'b71d4a1',
    date: '2025',
    type: 'feat',
    message: 'shipped Stridey iOS app @ Apple Foundation Program (1 of 35 / 530+ applicants)',
    body: 'Selected for one of Apple\'s most competitive student programs at RMIT. Built Stridey — an iOS app helping young adults reconnect with nature and ease climate burnout. Contributed SwiftUI screens, code integration, UX design, and the final pitch.',
    tag: 'apple',
    tagColor: '#bb9af7',
  },
  {
    hash: 'c29f813',
    date: '2025',
    type: 'feat',
    message: 'deployed multi-service AWS architecture with CloudWatch debugging',
    body: 'Designed and shipped a full cloud music platform across EC2, S3, Lambda, DynamoDB, and API Gateway. Traced and fixed a silent production defect through CloudWatch logs.',
    tag: 'cloud',
    tagColor: '#7dcfff',
  },
  {
    hash: 'd84c6b2',
    date: '2024',
    type: 'fix',
    message: 'resolved class imbalance killing ML classifier accuracy — applied SMOTE',
    body: 'Built an end-to-end music genre classifier. Diagnosed a class imbalance issue silently degrading performance, applied SMOTE to fix it, and evaluated across Random Forest, SVM, and k-NN.',
    tag: 'ml',
    tagColor: '#e0af68',
  },
  {
    hash: 'e15a9d7',
    date: '2024',
    type: 'feat',
    message: 'shipped EventHub — full-stack campus platform in Scrum team',
    body: 'RESTful Spring Boot backend, MySQL schema, Docker, GitHub Actions CI/CD, and full UAT cycles with a real product owner.',
    tag: 'backend',
    tagColor: '#f14c4c',
  },
  {
    hash: 'f03b2c9',
    date: '2024',
    type: 'chore',
    message: 'joined FIRE+ committee @ RMIT — content reaching 1,000+ students',
    body: null,
    tag: null,
    tagColor: null,
  },
  {
    hash: '912e5f4',
    date: '2022',
    type: 'init',
    message: 'started CS (Advanced) @ RMIT University Melbourne',
    body: 'Competed at World Scholar\'s Cup globally. International exchange at Kilgraston School, Scotland. Grade 1 Rock & Pop Keyboard — High Distinction.',
    tag: 'origin',
    tagColor: '#7aa2f7',
  },
]

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

      {/* Profile card */}
      <div className={styles.profileCard}>
        <div className={styles.profilePhotoWrapper}>
          <img src="/avatar.png" alt="Kannan Arora" className={styles.profilePhoto} />
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileName}>Kannan Arora</div>
          <div className={styles.profileRole}>Software Developer · Full-stack developer· Cloud · AI/ML</div>
          <div className={styles.profileMeta}>
            <span className={styles.profileMetaItem}> RMIT University, Melbourne</span>
            <span className={styles.profileMetaItem}> Graduating Jul 2026</span>
            <span className={styles.profileMetaItem}> Melbourne · Open to remote</span>
          </div>
          <div className={styles.profileAvail}>
            <span className={styles.profileAvailDot} />
            Available for internship & grad roles
          </div>
        </div>
      </div>

      {/* Git log */}
      <div className={styles.gitLog}>
        <div className={styles.gitLogHeader}>
          <span className={styles.gitLogCmd}>$ git log --oneline --all</span>
          <span className={styles.gitLogBranch}>branch: main · kannan-arora</span>
        </div>

        {COMMITS.map((commit, i) => (
          <div
            key={commit.hash}
            className={`${styles.commitRow} ${expanded === i ? styles.commitExpanded : ''}`}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className={styles.commitMain}>
              <span className={styles.commitHash}>{commit.hash}</span>
              <span className={styles.commitDate}>{commit.date}</span>
              <span className={styles.commitType} style={{ color: TYPE_COLORS[commit.type] }}>
                {commit.type}:
              </span>
              <span className={styles.commitMsg}>{commit.message}</span>
              {commit.tag && (
                <span className={styles.commitTag} style={{ borderColor: commit.tagColor, color: commit.tagColor }}>
                  {commit.tag}
                </span>
              )}
              <span className={styles.commitChevron}>{expanded === i ? '▾' : '▸'}</span>
            </div>

            {expanded === i && commit.body && (
              <div className={styles.commitBody}>
                <span className={styles.commitBodyBar} />
                <p>{commit.body}</p>
              </div>
            )}
          </div>
        ))}

        <div className={styles.gitLogFooter}>
          <span className={styles.gitLogCmd}>$ _</span>
        </div>
      </div>
    </div>
  )
}