import MyNavbar from './CustomNavbar'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Intro from './Intro'
import MyFooter from './CustomFooter'

const info = {
  contact: {
    linkedin: 'https://www.linkedin.com/in/alejandro-milian-moron/',
    github: 'https://github.com/alejmilian'
  }
}

function App () {
  document.body.classList.add('has-navbar-fixed-top')
  return (
    <div >
      <MyNavbar
        name={info.name}
        contact={info.contact} />
      <Intro
        linkedin = 'https://www.linkedin.com/in/alejandro-milian-moron/'
        github = 'https://github.com/alejmilian'
        resume = 'https://alejmilian.github.io/AlejandroResume.pdf'
      />
      <About />
      <Projects/>
      <Contact />
      <MyFooter />
    </div>
  )
}

export default App
