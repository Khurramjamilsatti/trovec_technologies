import { useContent } from '../hooks/useContent'
import { Reveal } from './Reveal'

export default function PakMaweshi() {
  const { pakmaweshi, sectors } = useContent()

  return (
    <section className="block" id={pakmaweshi.id}>
      <div className="wrap">
        <Reveal className="sec-head sec-head-split">
          <div>
            <div className="eyebrow">{pakmaweshi.eyebrow}</div>
            <h2>{pakmaweshi.title}</h2>
            <span className={`status ${pakmaweshi.status}`} style={{ marginTop: 14 }}>
              {sectors.statusLabels[pakmaweshi.status]}
            </span>
          </div>
          <p className="desc">{pakmaweshi.desc}</p>
        </Reveal>
      </div>
    </section>
  )
}
