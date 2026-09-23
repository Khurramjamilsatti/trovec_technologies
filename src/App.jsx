import { ContentProvider, useContent } from './hooks/useContent'
import Header from './components/Header'
import Hero from './components/Hero'
import Core from './components/Core'
import Industries from './components/Industries'
import ReitOs from './components/ReitOs'
import Taskora from './components/Taskora'
import PakMaweshi from './components/PakMaweshi'
import Compare from './components/Compare'
import Cases from './components/Cases'
import Regional from './components/Regional'
import Gcc from './components/Gcc'
import Pakistan from './components/Pakistan'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ContentProvider>
      <AppShell />
    </ContentProvider>
  )
}

function AppShell() {
  const { lang } = useContent()
  return (
    <div key={lang}>
      <Header />
      <main>
        <Hero />
        <Core />
        <Industries />
        <ReitOs />
        <Taskora />
        <PakMaweshi />
        <Compare />
        <Cases />
        <Regional />
        <Gcc />
        <Pakistan />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
