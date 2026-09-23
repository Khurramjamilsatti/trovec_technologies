import { motion, useReducedMotion } from 'framer-motion'
import { useContent } from '../hooks/useContent'

function PlatformVisual({ visual }) {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual-glow" />
      <div className="hero-visual-panel">
        <div className="hero-visual-label">{visual.title}</div>
        <div className="hero-visual-layers">
          {visual.layers.map((layer, i) => (
            <motion.div
              key={layer}
              className="hero-visual-layer"
              initial={{ opacity: 0.35, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
            >
              <span className="dot" />
              {layer}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="hero-visual-out"
          initial={{ opacity: 0.4, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.45 }}
        >
          <span>→</span> {visual.output}
        </motion.div>
        <div className="hero-orbit hero-orbit-a" />
        <div className="hero-orbit hero-orbit-b" />
      </div>
    </div>
  )
}

export default function Hero() {
  const { site } = useContent()
  const reduce = useReducedMotion()
  const { hero } = site

  return (
    <section className="hero" id="top">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            className="hero-brand-mark"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            {site.brand}
            <sup>™</sup>
          </motion.h1>

          <motion.p
            className="hero-title"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            {hero.title}
          </motion.p>

          <motion.p
            className="lede"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
          >
            {hero.shortLede}
          </motion.p>

          <motion.div
            className="actions"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            {hero.actions.map((a) => (
              <a
                key={a.href + a.label}
                className={a.variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
                href={a.href}
              >
                {a.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            className="taglinechips"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42 }}
          >
            {hero.chips.map((chip, i) => (
              <span key={chip} className="tchip">
                {i > 0 && <span className="chip-arrow">→</span>}
                {chip}
              </span>
            ))}
          </motion.div>
        </div>

        <PlatformVisual visual={hero.visual} />
      </div>
    </section>
  )
}
