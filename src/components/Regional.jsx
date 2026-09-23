import { useContent } from '../hooks/useContent'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export default function Regional() {
  const { regional } = useContent()

  return (
    <section className="block" id={regional.id}>
      <div className="wrap">
        <Reveal className="sec-head sec-head-split">
          <div>
            <div className="eyebrow">{regional.eyebrow}</div>
            <h2>{regional.title}</h2>
          </div>
          <p className="desc">{regional.desc}</p>
        </Reveal>

        <Stagger className="roadmap" delay={0.08}>
          {regional.stages.map((stage) => (
            <StaggerItem key={stage.eyebrow} className="stage">
              <div className="eyebrow">{stage.eyebrow}</div>
              <p>{stage.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
