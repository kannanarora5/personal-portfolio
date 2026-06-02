import React, { useState, useEffect, useRef } from 'react'
import { PROJECTS } from '../data.js'
import styles from './panels.module.css'

function MLBars({ bars, note, active }) {
  const [animated, setAnimated] = useState(false)
  const fillRefs = useRef([])

  useEffect(() => {
    if (active && !animated) {
      setTimeout(() => setAnimated(true), 200)
    }
  }, [active])

  return (
    <div>
      <div className={styles.mlBars}>
        {bars.map((bar, i) => (
          <div key={i} className={styles.mlRow}>
            <div className={styles.mlLabel}>{bar.label}</div>
            <div className={styles.mlTrack}>
              <div
                className={styles.mlFill}
                style={{ width: animated ? `${bar.w}%` : '0%' }}
              />
            </div>
            <div className={styles.mlVal}>{bar.value}%</div>
          </div>
        ))}
      </div>
      {note && <div className={styles.mlNote}>{note}</div>}
    </div>
  )
}

function ProjectCode({ project, isOpen }) {
  if (project.codeType === 'api') {
    const methodMap = {
      'method-get': styles.methodGet,
      'method-post': styles.methodPost,
      'method-put': styles.methodPut,
      'method-del': styles.methodDel,
    }
    return (
      <div className={styles.projCode}>
        <div className={styles.projCodeHeader}>{project.codeLabel}</div>
        <table className={styles.apiTable}>
          <tbody>
            {project.codeData.map((row, i) => (
              <tr key={i}>
                <td className={methodMap[row.methodClass]}>{row.method}</td>
                <td style={{ color: 'var(--param)' }}>{row.path}</td>
                <td style={{ color: 'var(--text-dim)' }}>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {project.codeFooter && <div className={styles.codeFooter}>{project.codeFooter}</div>}
      </div>
    )
  }

  if (project.codeType === 'aws') {
    return (
      <div className={styles.projCode}>
        <div className={styles.projCodeHeader}>{project.codeLabel}</div>
        <div className={styles.awsNodes}>
          {project.awsNodes.map((node, i) => (
            <React.Fragment key={i}>
              <div className={styles.awsNode}>
                <span style={{ color: node.color }}>◆</span>
                {node.label}
                <span className={styles.awsBadge}>{node.badge}</span>
              </div>
              {i < project.awsNodes.length - 1 && <div className={styles.awsConn} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  }

  if (project.codeType === 'ml') {
    return (
      <div className={styles.projCode}>
        <div className={styles.projCodeHeader}>{project.codeLabel}</div>
        <MLBars bars={project.mlBars} note={project.mlNote} active={isOpen} />
      </div>
    )
  }

  return null
}

export default function ProjectsPanel() {
  const [openId, setOpenId] = useState(null)

  function toggle(id) {
    setOpenId(prev => prev === id ? null : id)
  }

  return (
    <div className={styles.projectsPanel}>
      <div className={styles.panelTitle}>projects.tsx</div>
      {PROJECTS.map(project => {
        const isOpen = openId === project.id
        return (
          <div
            key={project.id}
            className={`${styles.projectCard} ${isOpen ? styles.open : ''}`}
          >
            <div className={styles.projectHeader} onClick={() => toggle(project.id)}>
              <div className={styles.projectHeaderLeft}>
                <div
                  className={styles.projectFileIcon}
                  style={{ background: project.iconBg, color: project.iconColor }}
                >
                  {project.icon}
                </div>
                <div>
                  <div className={styles.projectName}>{project.name}</div>
                  <div className={styles.projectOneliner}>{project.oneliner}</div>
                </div>
              </div>
              <span className={styles.projectChevron}>▶</span>
            </div>
            <div className={styles.projectBody}>
              <div className={styles.projectBodyInner}>
                <div>
                  <ul className={styles.projDetailList}>
                    {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                  <div className={styles.projTags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.projTag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/kannanarora"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.projLink}
                  >
                    ⌨ github.com/kannanarora →
                  </a>
                </div>
                <ProjectCode project={project} isOpen={isOpen} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
