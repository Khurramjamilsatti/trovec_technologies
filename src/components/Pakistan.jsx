import { useContent } from '../hooks/useContent'
import { Reveal } from './Reveal'

export default function Pakistan() {
  const { pakistan } = useContent()

  return (
    <section className="block" id={pakistan.id}>
      <div className="wrap">
        <Reveal className="sec-head sec-head-split">
          <div>
            <div className="eyebrow">{pakistan.eyebrow}</div>
            <h2>{pakistan.title}</h2>
          </div>
          <p className="desc">{pakistan.desc}</p>
        </Reveal>
      </div>
    </section>
  )
}
