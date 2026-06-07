import React, { useState, useEffect, useRef, useCallback } from 'react'
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

const MOBILE_MQ = '(max-width: 720px)'

function hashToTab(hash) {
  const raw = (hash || '').replace(/^#/, '')
  if (!raw || raw === 'readme') return 'readme'
  return FILES.find((f) => f.id === raw)?.id ?? 'readme'
}

function tabToUrl(id) {
  const base = `${window.location.pathname}${window.location.search}`
  return id === 'readme' ? base : `${base}#${id}`
}

export default function App() {
  const editorScrollRef = useRef(null)
  const isMobileRef = useRef(false)

  const [activeTab, setActiveTab] = useState(() =>
    typeof window !== 'undefined' ? hashToTab(window.location.hash) : 'readme',
  )
  const [openTabs, setOpenTabs] = useState(['readme', 'about', 'projects', 'skills', 'contact'])
  const [cmdOpen, setCmdOpen] = useState(false)
  const [sidebarVisible, setSidebarVisible] = useState(
    () => typeof window !== 'undefined' && !window.matchMedia(MOBILE_MQ).matches,
  )
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_MQ).matches,
  )

  const scrollEditorToTop = useCallback(() => {
    editorScrollRef.current?.scrollTo(0, 0)
  }, [])

  const setTab = useCallback((id, { recordHistory = false } = {}) => {
    if (!FILES.some((f) => f.id === id)) return

    setOpenTabs((prev) => (prev.includes(id) ? prev : [...prev, id]))
    setActiveTab(id)
    if (isMobileRef.current) setSidebarVisible(false)

    const url = tabToUrl(id)
    if (recordHistory) {
      history.pushState({ tab: id }, '', url)
    } else {
      history.replaceState({ tab: id }, '', url)
    }

    requestAnimationFrame(scrollEditorToTop)
  }, [scrollEditorToTop])

  useEffect(() => {
    isMobileRef.current = isMobile
  }, [isMobile])

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ)
    const onChange = () => {
      const mobile = mq.matches
      setIsMobile(mobile)
      if (mobile) setSidebarVisible(false)
    }
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const initial = hashToTab(window.location.hash)
    history.replaceState({ tab: initial }, '', tabToUrl(initial))
    setActiveTab(initial)
    requestAnimationFrame(scrollEditorToTop)

    const onPopState = (e) => {
      const tab = e.state?.tab ?? hashToTab(window.location.hash)
      setOpenTabs((prev) => (prev.includes(tab) ? prev : [...prev, tab]))
      setActiveTab(tab)
      if (isMobileRef.current) setSidebarVisible(false)
      requestAnimationFrame(scrollEditorToTop)
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [scrollEditorToTop])

  function switchTab(id) {
    if (id === activeTab) {
      scrollEditorToTop()
      return
    }
    setTab(id, { recordHistory: true })
  }

  function closeTab(id) {
    const remaining = openTabs.filter((t) => t !== id)
    setOpenTabs(remaining)
    if (activeTab === id) {
      const idx = openTabs.indexOf(id)
      const next = remaining[Math.min(idx, remaining.length - 1)]
      if (next) setTab(next, { recordHistory: true })
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
        {isMobile && sidebarVisible && (
          <button
            type="button"
            className={styles.sidebarBackdrop}
            aria-label="Close explorer"
            onClick={() => setSidebarVisible(false)}
          />
        )}
        <ActivityBar
          onToggle={() => setSidebarVisible(v => !v)}
          sidebarVisible={sidebarVisible}
          isMobile={isMobile}
        />
        <Sidebar activeTab={activeTab} onSwitch={switchTab} visible={sidebarVisible} isMobile={isMobile} />

        <div className={styles.editorArea}>
          <TabBar activeTab={activeTab} onSwitch={switchTab} openTabs={openTabs} onClose={closeTab} />

          <div className={styles.breadcrumb}>
            <span>~</span>
            <span className={styles.crumbSep}>›</span>
            <span>portfolio</span>
            <span className={styles.crumbSep}>›</span>
            <span className={styles.crumbActive}>{activeFile?.name}</span>
          </div>

          <div className={styles.editorScroll} ref={editorScrollRef}>
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