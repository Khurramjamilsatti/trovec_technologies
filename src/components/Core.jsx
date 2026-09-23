import { useContent } from '../hooks/useContent'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export default function Core() {
  const { core } = useContent()

  return (
    <section className="block block-tint" id={core.id}>
      <div className="wrap">
        <Reveal className="sec-head sec-head-split">
          <div>
            <div className="eyebrow">{core.eyebrow}</div>
            <h2>{core.title}</h2>
          </div>
          <p className="desc">{core.desc}</p>
        </Reveal>

        <Stagger className="bento-core">
          {core.layers.map((layer, i) => (
            <StaggerItem
              key={layer.k}
              className={`bento-cell${i === 0 ? ' bento-wide' : ''}${i === 3 ? ' bento-accent' : ''}`}
            >
              <div className="k">{layer.k}</div>
              <h3>{layer.title}</h3>
              <ul>
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="core-stack" delay={0.12}>
          <span>{core.stack}</span>
        </Reveal>
      </div>
    </section>
  )
}
