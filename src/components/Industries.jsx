import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useContent } from '../hooks/useContent'
import { Reveal, Stagger, StaggerItem } from './Reveal'

function StatusBadge({ status, label }) {
  return <span className={`status ${status}`}>{label}</span>
}

export default function Industries() {
  const { industries, sectors: sectorsData } = useContent()
  const [openId, setOpenId] = useState(null)
  const { items, statusLabels } = sectorsData
  const open = items.find((s) => s.id === openId)

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="block" id={industries.id}>
      <div className="wrap">
        <Reveal className="sec-head sec-head-split">
          <div>
            <div className="eyebrow">{industries.eyebrow}</div>
            <h2>{industries.title}</h2>
          </div>
          <div>
            <p className="desc">{industries.desc}</p>
            <div className="legend-row">
              {industries.statusLegend.map((leg) => (
                <span key={leg.status} className="legend-item">
                  <StatusBadge status={leg.status} label={statusLabels[leg.status]} />
                  <span>{leg.meaning}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Stagger className="sector-grid" delay={0.03}>
          {items.map((s) => (
            <StaggerItem key={s.id}>
              <button
                type="button"
                className={`sector-card${openId === s.id ? ' active' : ''}`}
                onClick={() => toggle(s.id)}
                aria-expanded={openId === s.id}
              >
                <div className="sector-card-top">
                  <div className="num">{String(s.id).padStart(2, '0')}</div>
                  <StatusBadge status={s.status} label={statusLabels[s.status]} />
                </div>
                <h3>{s.name}</h3>
                <div className="plat">{s.platform}</div>
                <div className="one">{s.one}</div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>

        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              key={open.id}
              className="accordion-panel open"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="panel-head">
                <div>
                  <div className="plat">{open.platform}</div>
                  <h3>{open.name}</h3>
                </div>
                <StatusBadge status={open.status} label={statusLabels[open.status]} />
              </div>
              <div className="market">{open.market}</div>
              <div className="grid2">
                <div>
                  <h4>{industries.panelLabels.modules}</h4>
                  <ul>
                    {open.modules.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>{industries.panelLabels.ai}</h4>
                  <ul>
                    {open.ai.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <h4 style={{ marginTop: 18 }}>{industries.panelLabels.why}</h4>
              <div className="why">{open.why}</div>
              <button type="button" className="close-panel" onClick={() => setOpenId(null)}>
                {industries.panelLabels.close}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
