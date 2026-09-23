import { useContent } from '../hooks/useContent'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export default function Compare() {
  const { compare } = useContent()

  return (
    <section className="block" id={compare.id}>
      <div className="wrap">
        <Reveal className="sec-head sec-head-split">
          <div>
            <div className="eyebrow">{compare.eyebrow}</div>
            <h2>{compare.title}</h2>
          </div>
          <p className="desc">{compare.desc}</p>
        </Reveal>

        <Stagger className="compare-list" delay={0.06}>
          {compare.rows.map((row) => (
            <StaggerItem key={row.dimension} className="compare-row">
              <div className="compare-dim">{row.dimension}</div>
              <div className="compare-col">
                <span className="compare-label">{compare.headers[1]}</span>
                <p>{row.typical}</p>
              </div>
              <div className="compare-col trovec">
                <span className="compare-label">{compare.headers[2]}</span>
                <p>{row.trovec}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="compare-note">{compare.note}</p>
      </div>
    </section>
  )
}
