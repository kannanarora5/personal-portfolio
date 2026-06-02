import React, { useState, useEffect } from 'react'
import { FILES } from './data.js'
import TitleBar from './components/TitleBar.jsx'
import ActivityBar from './components/ActivityBar.jsx'
import Sidebar from './components/Sidebar.jsx'
import TabBar from './components/TabBar.jsx'
import StatusBar from './components/StatusBar.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import ReadmePanel from './components/ReadmePanel.jsx'
import AboutPanel from './components/AboutPanel.jsx'
import ProjectsPanel from './components/ProjectsPanel.jsx'
import SkillsPanel from './components/SkillsPanel.jsx'
import ContactPanel from './components/ContactPanel.jsx'
import styles from './App.module.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('readme')
  const [openTabs, setOpenTabs] = useState(['readme', 'about', 'projects', 'skills', 'contact'])
  const [cmdOpen, setCmdOpen] = useState(false)

  function switchTab(id) {
    if (!openTabs.includes(id)) setOpenTabs(prev => [...prev, id])
    setActiveTab(id)
  }

  function closeTab(id) {
    const remaining = openTabs.filter(t => t !== id)
    setOpenTabs(remaining)
    if (activeTab === id) {
      const idx = openTabs.indexOf(id)
      const next = remaining[Math.min(idx, remaining.length - 1)]
      if (next) setActiveTab(next)
    }
  }

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'p' || e.key === 'k')) {
        e.preventDefault()
        setCmdOpen(o => !o)
        return
      }
      if (!cmdOpen && (e.metaKey || e.ctrlKey) && e.key >= '1' && e.key <= '5') {
        e.preventDefault()
        switchTab(FILES[parseInt(e.key, 10) - 1].id)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [cmdOpen])

  const activeFile = FILES.find(f => f.id === activeTab)

  return (
    <>
      <TitleBar />

      <div className={styles.workspace}>
        <ActivityBar />
        <Sidebar activeTab={activeTab} onSwitch={switchTab} />

        <div className={styles.editorArea}>
          <TabBar activeTab={activeTab} onSwitch={switchTab} openTabs={openTabs} onClose={closeTab} />

          <div className={styles.breadcrumb}>
            <span>~</span>
            <span className={styles.crumbSep}>›</span>
            <span>portfolio</span>
            <span className={styles.crumbSep}>›</span>
            <span className={styles.crumbActive}>{activeFile?.name}</span>
          </div>

          <div className={styles.editorScroll}>
            {activeTab === 'readme' && (
              <div style={{ animation: 'fadeIn .15s ease' }}>
                <ReadmePanel onSwitch={switchTab} />
              </div>
            )}
            {activeTab === 'about' && (
              <div style={{ animation: 'fadeIn .15s ease' }}>
                <AboutPanel />
              </div>
            )}
            {activeTab === 'projects' && (
              <div style={{ animation: 'fadeIn .15s ease' }}>
                <ProjectsPanel />
              </div>
            )}
            {activeTab === 'skills' && (
              <div style={{ animation: 'fadeIn .15s ease' }}>
                <SkillsPanel />
              </div>
            )}
            {activeTab === 'contact' && (
              <div style={{ animation: 'fadeIn .15s ease' }}>
                <ContactPanel />
              </div>
            )}
          </div>
        </div>
      </div>

      <StatusBar onSwitch={switchTab} />

      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onSwitch={(id) => { switchTab(id); setCmdOpen(false) }}
      />
    </>
  )
}