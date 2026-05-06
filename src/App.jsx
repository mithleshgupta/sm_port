import { Component } from 'react'
import './index.css'
import { Navbar }         from './components/layout/Navbar'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { BackToTop }      from './components/layout/BackToTop'
import { Footer }         from './components/layout/Footer'
import { Hero }           from './components/sections/Hero'
import { ReelShowcase }   from './components/sections/ReelShowcase'
import { CaseStudy }      from './components/sections/CaseStudy'
import { Expertise }      from './components/sections/Expertise'
import { WorkExperience } from './components/sections/WorkExperience'
import { Strategy }       from './components/sections/Strategy'
import { Tools }          from './components/sections/Tools'
import { About }          from './components/sections/About'
import { Contact }        from './components/sections/Contact'
import { PhotoStrip }     from './components/sections/PhotoStrip'

class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(e) { return { error: e } }
  render() {
    if (this.state.error) return (
      <div style={{ background: '#0A0A10', color: '#C4A8CC', padding: '40px', fontFamily: 'monospace', fontSize: '14px', minHeight: '100vh' }}>
        <h1 style={{ color: '#EEE8F5', marginBottom: 16 }}>Runtime Error</h1>
        <pre style={{ whiteSpace: 'pre-wrap', color: '#9090A8' }}>{this.state.error?.stack || this.state.error?.message}</pre>
      </div>
    )
    return this.props.children
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <PhotoStrip />
        <ReelShowcase />
        <CaseStudy />
        <Expertise />
        <WorkExperience />
        <Strategy />
        <Tools />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ErrorBoundary>
  )
}
