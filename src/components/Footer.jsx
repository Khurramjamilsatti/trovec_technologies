import { useContent } from '../hooks/useContent'

export default function Footer() {
  const { site } = useContent()

  return (
    <footer>
      <div className="wrap">
        <div>{site.footer.left}</div>
        <div>{site.footer.right}</div>
      </div>
    </footer>
  )
}
