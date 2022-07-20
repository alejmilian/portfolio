import MyNavbar from './CustomNavbar'
import About from './About'
import Projects from './ProjectsGrid'
import Contact from './Contact'
import Intro from './Intro'
import MyFooter from './CustomFooter'

import cute from '../images/cute.jpg'

const info = {
  contact: {
    linkedin: 'https://www.linkedin.com/in/alejandro-milian-moron/',
    github: 'https://github.com/alejmilian'
  }
}

const fakedProject = {
  name: 'fake',
  image: cute,
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit aspernatur eveniet deleniti ab similique voluptates quas omnis nulla eligendi quidem vitae sunt nostrum atque magnam maxime, incidunt pariatur laborum.',
  codeurl: '#',
  previewurl: '#'
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
      <Projects projects={[fakedProject, fakedProject, fakedProject]}/>
      <Contact />
      <MyFooter />
    </div>
  )
}

export default App
