import { useTranslation } from 'react-i18next'
import Sidebar from './components/Sidebar'
import LanguageSwitcher from './components/LanguageSwitcher'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Languages from './components/Languages'
import Activities from './components/Activities'
import Contact from './components/Contact'
import './App.css'

function App() {
  const { t } = useTranslation()

  return (
    <div className="app">
      <Sidebar />
      <LanguageSwitcher />
      <main className="main-content">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Languages />
        <Activities />
        <Contact />
      </main>
    </div>
  )
}

export default App
