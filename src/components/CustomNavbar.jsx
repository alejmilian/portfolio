function MyNavbar () {
  return (
    <nav className='navbar is-fixed-top is-size-5-desktop'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='index.html' target='_blank'>
          <i className='fa-solid fa-code' aria-hidden='true'>
            Alejandro
          </i>
        </a>
        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarMenu' className='navbar-menu'>
        <div className='navbar-end'>
          <a href='#about' className='navbar-item'>
            About
          </a>
          <a href='#projects' className='navbar-item'>
            Projects
          </a>
          <a href='#contact' className='navbar-item'>
            Contact
          </a>
          <a
            className='navbar-item'
            href='https://www.linkedin.com/in/alejandro-mili%C3%A1n-mor%C3%B3n-baa084216/'
            target='_blank'
            rel='noreferrer'>
            <span className='icon'>
              <i className='fa-brands fa-linkedin' aria-hidden='true'></i>
              <span className='sr-only'>Linkedin</span>
            </span>
          </a>
          <a
            className='navbar-item'
            href='https://github.com/alejmilian'
            target='_blank'
            rel='noreferrer'>
            <span className='icon'>
              <i className='fa-brands fa-github-square' aria-hidden='true'></i>
              <span className='sr-only'>Github</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default MyNavbar
