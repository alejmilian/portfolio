import MyNavbar from './CustomNavbar'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Intro from './Intro'
import MyFooter from './CustomFooter'

import config from '../config/configuration.json'

function App () {
  document.body.classList.add('has-navbar-fixed-top')
  return (
    <div >
      <MyNavbar
        name={config.info.name}
        linkedin={config.info.links.linkedin}
        github={config.info.links.github}
      />
      <Intro
        {...config.info}
      />
      <About />
      <Projects/>
      <Contact />
      <MyFooter />
    </div>
  )
}

export default App
