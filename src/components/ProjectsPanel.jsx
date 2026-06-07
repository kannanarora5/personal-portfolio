import React, { useState } from 'react'
import styles from './panels.module.css'
import { WORKSPACE_PROJECTS } from '../data.js'

export default function ProjectsPanel() {
  const [activeProject, setActiveProject] = useState(WORKSPACE_PROJECTS[0].id)
  const [activeFile, setActiveFile] = useState(WORKSPACE_PROJECTS[0].files[0].name)

  const project = WORKSPACE_PROJECTS.find((p) => p.id === activeProject)
  const file = project?.files.find((f) => f.name === activeFile)

  function selectProject(id) {
    const next = WORKSPACE_PROJECTS.find((p) => p.id === id)
    setActiveProject(id)
    setActiveFile(next.files[0].name)
  }

  return (
    <div className={styles.projectsPanel}>
      <div className={styles.panelTitle}>projects.tsx</div>

      <div className={styles.projectsMobileBar}>
        {WORKSPACE_PROJECTS.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`${styles.projectChip} ${activeProject === p.id ? styles.projectChipActive : ''}`}
            onClick={() => selectProject(p.id)}
          >
            <span className={styles.projectChipDot} style={{ background: p.statusColor }} />
            <span className={styles.projectChipName}>{p.folder}</span>
          </button>
        ))}
      </div>

      <div className={styles.projectsMobileFiles}>
        {project?.files.map((f) => (
          <button
            key={f.name}
            type="button"
            className={`${styles.fileChip} ${activeFile === f.name ? styles.fileChipActive : ''}`}
            onClick={() => setActiveFile(f.name)}
          >
            <span
              className={styles.fileChipIcon}
              style={{ color: f.iconColor, background: `${f.iconColor}18` }}
            >
              {f.icon}
            </span>
            {f.name}
          </button>
        ))}
      </div>

      <div className={styles.projectsWorkspace}>
        <div className={styles.projectsExplorer}>
          <div className={styles.explorerHeader}>
            <div className={styles.explorerTitle}>EXPLORER</div>
          </div>
          <div className={styles.explorerSection}>
            <div className={styles.treeRoot}>
              <span className={styles.treeRootChevron}>▾</span>
              <span className={styles.treeRootLabel}>~/github/kannanarora5</span>
            </div>

            {WORKSPACE_PROJECTS.map((p) => (
              <div key={p.id} className={styles.treeFolder}>
                <div
                  className={`${styles.treeFolderRow} ${activeProject === p.id ? styles.treeFolderActive : ''}`}
                  onClick={() => selectProject(p.id)}
                >
                  <span className={styles.treeFolderChevron}>
                    {activeProject === p.id ? '▾' : '▸'}
                  </span>
                  <span className={styles.treeFolderDot} style={{ background: p.statusColor }} />
                  <span className={styles.treeFolderName}>{p.folder}</span>
                  <span className={styles.treeFolderStatus} style={{ color: p.statusColor }}>
                    {p.status}
                  </span>
                </div>

                {activeProject === p.id && (
                  <div className={styles.treeFolderContents}>
                    {p.files.map((f) => (
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

        <div className={styles.projectsPreview}>
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

          <div className={styles.previewBreadcrumb}>
            <span>github</span>
            <span className={styles.previewCrumbSep}>›</span>
            <span>{project?.folder}</span>
            <span className={styles.previewCrumbSep}>›</span>
            <span className={styles.previewCrumbActive}>{file?.name}</span>
          </div>

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
                <div className={styles.previewTagRow}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.previewTag}>
                      {tag}
                    </span>
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
                      <span
                        style={{
                          color: line.color,
                          fontFamily: 'var(--font-mono)',
                          fontSize: 13,
                        }}
                      >
                        &quot;{line.value}&quot;
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={styles.previewFooter}>
            <a
              href={project?.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.previewGithub}
            >
              ⌨ {project?.githubLabel} →
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
