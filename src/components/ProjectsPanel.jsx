import React, { useState } from 'react'
import styles from './panels.module.css'

const PROJECTS = [
  {
    id: 'eventhub',
    folder: 'EventHub',
    status: 'DEPLOYED',
    statusColor: '#86efac',
    desc: 'Campus event management platform built end-to-end in a Scrum team with a real product owner.',
    files: [
      {
        name: 'App.java',
        icon: 'J',
        iconColor: '#fca5a5',
        content: [
          { label: 'framework',  value: 'Spring Boot',    color: '#93c5fd' },
          { label: 'database',   value: 'MySQL',           color: '#93c5fd' },
          { label: 'auth',       value: 'JWT',             color: '#93c5fd' },
          { label: 'patterns',   value: 'OOP, MVC, REST',  color: '#93c5fd' },
        ],
      },
      {
        name: 'docker-compose.yml',
        icon: 'D',
        iconColor: '#67e8f9',
        content: [
          { label: 'container', value: 'Docker',          color: '#67e8f9' },
          { label: 'ci/cd',     value: 'GitHub Actions',  color: '#67e8f9' },
          { label: 'port',      value: '8080',            color: '#67e8f9' },
        ],
      },
      {
        name: 'README.md',
        icon: 'M',
        iconColor: '#52525b',
        content: [
          { label: 'desc', value: 'RESTful API for campus event management. Full SDLC — design, build, test, deploy. Scrum team with real product owner and UAT cycles.', color: '#d4d4d8', isText: true },
        ],
      },
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'cloudmusic',
    folder: 'cloud-music-platform',
    status: 'DEPLOYED',
    statusColor: '#86efac',
    desc: 'Multi-service AWS app. Traced and fixed a silent production defect via CloudWatch.',
    files: [
      {
        name: 'architecture.py',
        icon: 'PY',
        iconColor: '#67e8f9',
        content: [
          { label: 'compute',  value: 'EC2, Lambda',   color: '#93c5fd' },
          { label: 'storage',  value: 'S3, DynamoDB',  color: '#93c5fd' },
          { label: 'gateway',  value: 'API Gateway',   color: '#93c5fd' },
          { label: 'monitor',  value: 'CloudWatch',    color: '#93c5fd' },
        ],
      },
      {
        name: 'bugfix.log',
        icon: '!',
        iconColor: '#fcd34d',
        content: [
          { label: 'WARN', value: 'API Gateway mapping mismatch detected', color: '#fcd34d' },
          { label: 'INFO', value: 'Traced via CloudWatch logs',             color: '#52525b' },
          { label: 'FIX ', value: 'Misconfigured mapping corrected',        color: '#86efac' },
          { label: 'OK  ', value: 'Lambda healthy · 143ms avg',             color: '#86efac' },
        ],
      },
      {
        name: 'README.md',
        icon: 'M',
        iconColor: '#52525b',
        content: [
          { label: 'desc', value: 'Deployed across EC2, S3, Lambda, DynamoDB, API Gateway. Traced a silent production defect through CloudWatch and fixed a misconfigured API Gateway mapping.', color: '#d4d4d8', isText: true },
        ],
      },
    ],
    tags: ['Python', 'AWS', 'Lambda', 'DynamoDB', 'CloudWatch'],
  },
  {
    id: 'classifier',
    folder: 'music-genre-classifier',
    status: 'TRAINED',
    statusColor: '#93c5fd',
    desc: 'End-to-end ML pipeline. Fixed class imbalance that was silently killing accuracy.',
    files: [
      {
        name: 'train.py',
        icon: 'PY',
        iconColor: '#93c5fd',
        content: [
          { label: 'model',     value: 'Random Forest', color: '#93c5fd' },
          { label: 'fix',       value: 'SMOTE applied', color: '#86efac' },
          { label: 'f1_before', value: '0.61',          color: '#fca5a5' },
          { label: 'f1_after',  value: '0.80  ✓',       color: '#86efac' },
          { label: 'accuracy',  value: '84%',           color: '#86efac' },
        ],
      },
      {
        name: 'pipeline.ipynb',
        icon: 'NB',
        iconColor: '#fcd34d',
        content: [
          { label: 'steps', value: 'clean → features → train → eval', color: '#93c5fd' },
          { label: 'libs',  value: 'scikit-learn, pandas, SMOTE',      color: '#93c5fd' },
          { label: 'cv',    value: '5-fold cross validation',          color: '#93c5fd' },
        ],
      },
      {
        name: 'README.md',
        icon: 'M',
        iconColor: '#52525b',
        content: [
          { label: 'desc', value: 'Diagnosed a class imbalance issue silently degrading performance. Applied SMOTE, compared Random Forest vs SVM vs k-NN. F1 improved from 61% to 80%.', color: '#d4d4d8', isText: true },
        ],
      },
    ],
    tags: ['Python', 'scikit-learn', 'pandas', 'SMOTE', 'Jupyter'],
  },
  {
    id: 'social',
    folder: 'social-media-app',
    status: 'RUNNING',
    statusColor: '#67e8f9',
    desc: 'Node.js backend with JWT auth, follow system, and feed generation.',
    files: [
      {
        name: 'server.js',
        icon: 'JS',
        iconColor: '#fcd34d',
        content: [
          { label: 'runtime', value: 'Node.js + Express', color: '#93c5fd' },
          { label: 'auth',    value: 'JWT + bcrypt',       color: '#93c5fd' },
          { label: 'db',      value: 'PostgreSQL',         color: '#93c5fd' },
          { label: 'port',    value: '3000',               color: '#93c5fd' },
        ],
      },
      {
        name: 'api.test.js',
        icon: 'TS',
        iconColor: '#86efac',
        content: [
          { label: 'framework', value: 'Jest',            color: '#86efac' },
          { label: 'coverage',  value: 'full',            color: '#86efac' },
          { label: 'docs',      value: 'Swagger/OpenAPI', color: '#86efac' },
        ],
      },
      {
        name: 'README.md',
        icon: 'M',
        iconColor: '#52525b',
        content: [
          { label: 'desc', value: 'REST API with Express.js. JWT auth, bcrypt hashing, follow/unfollow, likes, feed generation. PostgreSQL schema with migrations. Full Jest test coverage.', color: '#d4d4d8', isText: true },
        ],
      },
    ],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Jest'],
  },
]

export default function ProjectsPanel() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0].id)
  const [activeFile, setActiveFile] = useState(PROJECTS[0].files[0].name)

  const project = PROJECTS.find(p => p.id === activeProject)
  const file = project?.files.find(f => f.name === activeFile)

  function selectProject(id) {
    setActiveProject(id)
    setActiveFile(PROJECTS.find(p => p.id === id).files[0].name)
  }

  return (
    <div className={styles.projectsPanel}>
      <div className={styles.panelTitle}>projects.tsx</div>

      <div className={styles.projectsWorkspace}>

        {/* ── Left: explorer ── */}
        <div className={styles.projectsExplorer}>
          <div className={styles.explorerHeader}>
            <div className={styles.explorerTitle}>EXPLORER</div>
          </div>
          <div className={styles.explorerSection}>
            <div className={styles.treeRoot}>
              <span className={styles.treeRootChevron}>▾</span>
              <span className={styles.treeRootLabel}>~/portfolio/projects</span>
            </div>

            {PROJECTS.map(p => (
              <div key={p.id} className={styles.treeFolder}>
                <div
                  className={`${styles.treeFolderRow} ${activeProject === p.id ? styles.treeFolderActive : ''}`}
                  onClick={() => selectProject(p.id)}
                >
                  <span className={styles.treeFolderChevron}>{activeProject === p.id ? '▾' : '▸'}</span>
                  <span className={styles.treeFolderDot} style={{ background: p.statusColor }} />
                  <span className={styles.treeFolderName}>{p.folder}</span>
                  <span className={styles.treeFolderStatus} style={{ color: p.statusColor }}>{p.status}</span>
                </div>

                {activeProject === p.id && (
                  <div className={styles.treeFolderContents}>
                    {p.files.map(f => (
                      <div
                        key={f.name}
                        className={`${styles.treeFileRow} ${activeFile === f.name ? styles.treeFileSelected : ''}`}
                        onClick={() => setActiveFile(f.name)}
                      >
                        <span
                          className={styles.treeFileIcon}
                          style={{ color: f.iconColor, background: `${f.iconColor}18` }}
                        >
                          {f.icon}
                        </span>
                        <span className={styles.treeFileName}>{f.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: preview ── */}
        <div className={styles.projectsPreview}>
          {/* Tab bar */}
          <div className={styles.previewTabBar}>
            {file && (
              <div className={styles.previewTabActive}>
                <span
                  className={styles.previewTabIcon}
                  style={{ color: file.iconColor, background: `${file.iconColor}18` }}
                >
                  {file.icon}
                </span>
                {file.name}
              </div>
            )}
          </div>

          {/* Breadcrumb */}
          <div className={styles.previewBreadcrumb}>
            <span>portfolio</span>
            <span className={styles.previewCrumbSep}>›</span>
            <span>{project?.folder}</span>
            <span className={styles.previewCrumbSep}>›</span>
            <span className={styles.previewCrumbActive}>{file?.name}</span>
          </div>

          {/* Body */}
          <div className={styles.previewBody}>
            {!file ? (
              <div className={styles.previewEmpty}>
                <div className={styles.previewEmptyIcon}>{ }</div>
                <span>Select a file to preview</span>
              </div>
            ) : file.content[0]?.isText ? (
              <div className={styles.readmePreview}>
                <div className={styles.readmePreviewTitle}>{project.folder}</div>
                <p>{file.content[0].value}</p>
                <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      padding: '2px 10px',
                      borderRadius: 20,
                      background: 'rgba(103,232,249,.08)',
                      border: '1px solid rgba(103,232,249,.2)',
                      color: 'var(--accent)',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.previewBlock}>
                <div className={styles.previewBlockLabel}>{file.name}</div>
                <div className={styles.kvViewer}>
                  {file.content.map((line, i) => (
                    <div key={i} className={styles.previewKvLine}>
                      <span className={styles.previewLineNum}>{i + 1}</span>
                      <span className={styles.previewKvKey}>{line.label}</span>
                      <span className={styles.previewKvEq}>=</span>
                      <span style={{ color: line.color, fontFamily: 'var(--font-mono)', fontSize: 13 }}>
                        "{line.value}"
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className={styles.previewFooter}>
            <a
              href="https://github.com/kannanarora"
              target="_blank"
              rel="noreferrer"
              className={styles.previewGithub}
            >
              ⌨ github.com/kannanarora →
            </a>
            <span className={styles.previewFooterMeta}>
              <span style={{ color: project?.statusColor }}>● {project?.status}</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}