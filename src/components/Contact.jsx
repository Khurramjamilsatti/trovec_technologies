import { useContent } from '../hooks/useContent'
import { Reveal, Stagger, StaggerItem } from './Reveal'

function Field({ field }) {
  if (field.type === 'select') {
    return (
      <select defaultValue={field.options[0]}>
        {field.options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    )
  }
  if (field.type === 'textarea') {
    return <textarea placeholder={field.placeholder} />
  }
  return <input type={field.type} placeholder={field.placeholder} />
}

export default function Contact() {
  const { contact } = useContent()

  function handleSubmit(e) {
    e.preventDefault()
    window.alert(contact.submitAlert)
  }

  return (
    <section className="cta-section" id={contact.id}>
      <div className="wrap">
        <Reveal className="sec-head sec-head-split">
          <div>
            <div className="eyebrow">{contact.eyebrow}</div>
            <h2>{contact.title}</h2>
          </div>
          <p className="desc">{contact.desc}</p>
        </Reveal>

        <Stagger className="form-grid" delay={0.07}>
          {contact.forms.map((form) => (
            <StaggerItem key={`${form.id}-${contact.id}`} className="form-card">
              <form key={form.id} onSubmit={handleSubmit}>
                <h3>{form.title}</h3>
                <p className="small">{form.subtitle}</p>
                {form.fields.map((field, i) => (
                  <Field key={`${form.id}-${i}-${field.placeholder || field.type}`} field={field} />
                ))}
                <button className="btn-primary" type="submit">
                  {form.submit}
                </button>
              </form>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="actions" delay={0.1}>
          <a className="btn-secondary" href={`mailto:${contact.email}`}>
            {contact.emailLabel}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
