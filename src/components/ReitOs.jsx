import { useContent } from '../hooks/useContent'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export default function ReitOs() {
  const { reitos } = useContent()

  return (
    <section className="block block-dark" id={reitos.id}>
      <div className="wrap">
        <Reveal className="sec-head sec-head-split">
          <div>
            <div className="eyebrow">{reitos.eyebrow}</div>
            <h2>{reitos.title}</h2>
          </div>
          <p className="desc">{reitos.desc}</p>
        </Reveal>

        <div className="flow-track-wrap">
          <Stagger className="flow-track" delay={0.05}>
            {reitos.chain.map((link, i) => (
              <StaggerItem key={link.label} className="flow-step">
                <span className="flow-num">{String(i + 1).padStart(2, '0')}</span>
                <b>{link.label}</b>
                <span>{link.value}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Stagger className="product-rail" delay={0.06}>
          {reitos.products.map((row) => (
            <StaggerItem key={row.name} className="product-tile">
              <div className="tag">{row.tag}</div>
              <h3>{row.name}</h3>
              <p>{row.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="trust-grid" delay={0.08}>
          {reitos.trust.map((card) => (
            <StaggerItem key={card.badge} className="trust-card">
              <span className="badge">{card.badge}</span>
              <p>{card.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
