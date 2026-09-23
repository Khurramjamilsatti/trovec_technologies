import { useContent } from '../hooks/useContent'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export default function Cases() {
  const { cases } = useContent()

  return (
    <section className="block block-tint" id={cases.id}>
      <div className="wrap">
        <Reveal className="sec-head sec-head-split">
          <div>
            <div className="eyebrow">{cases.eyebrow}</div>
            <h2>{cases.title}</h2>
          </div>
          <p className="desc">{cases.desc}</p>
        </Reveal>

        <Stagger className="case-grid" delay={0.08}>
          {cases.items.map((item) => (
            <StaggerItem key={item.title} className="case-card">
              <span className="badge">{item.badge}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
