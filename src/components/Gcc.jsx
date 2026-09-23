import { useContent } from '../hooks/useContent'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export default function Gcc() {
  const { gcc } = useContent()

  return (
    <section className="block block-tint" id={gcc.id}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow">{gcc.eyebrow}</div>
          <h2>{gcc.title}</h2>
        </Reveal>

        <Stagger className="gcc-grid" delay={0.06}>
          {gcc.markets.map((m) => (
            <StaggerItem key={m.name} className="gcc-card">
              <h3>{m.name}</h3>
              <div className="tag">{m.tag}</div>
              <p>{m.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
