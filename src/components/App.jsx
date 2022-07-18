import MyNavbar from './CustomNavbar'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Intro from './Intro'
import MyFooter from './CustomFooter'

function App () {
  return (
    <div className='has-navbar-fixed-top'>
      <MyNavbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <MyFooter />
    </div>
  )
}

export default App
