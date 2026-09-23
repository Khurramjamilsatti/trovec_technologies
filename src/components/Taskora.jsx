import { useContent } from '../hooks/useContent'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export default function Taskora() {
  const { taskora } = useContent()

  return (
    <section className="block block-tint" id={taskora.id}>
      <div className="wrap">
        <Reveal className="sec-head sec-head-split">
          <div>
            <div className="eyebrow">{taskora.eyebrow}</div>
            <h2>{taskora.title}</h2>
          </div>
          <p className="desc">
            {taskora.desc.split('taskora.digital').map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <a href={taskora.url} target="_blank" rel="noopener noreferrer">
                    taskora.digital
                  </a>
                </span>
              ) : (
                <span key={i}>{part}</span>
              ),
            )}
          </p>
        </Reveal>

        <Stagger className="feature-bento" delay={0.07}>
          {taskora.features.map((row) => (
            <StaggerItem key={row.name} className="feature-tile">
              <div className="tag">{row.tag}</div>
              <h3>{row.name}</h3>
              <p>{row.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="trust-grid" delay={0.08}>
          {taskora.trust.map((card) => (
            <StaggerItem key={card.badge} className="trust-card">
              <span className="badge">{card.badge}</span>
              <p>{card.text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="actions" delay={0.1} style={{ marginTop: 28 }}>
          <a className="btn-primary" href={taskora.url} target="_blank" rel="noopener noreferrer">
            {taskora.urlLabel}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
