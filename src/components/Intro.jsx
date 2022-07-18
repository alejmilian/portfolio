function Intro () {
  return (
    <section id='intro' className='is-family-sans-serif hero is-link is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-8-desktop is-offset-2-desktop'>
              <p className='subtitle is-5'>Hi, my name is</p>
              <h1 className='title is-1 is-spaced'>Alejandro Mili&aacute;n</h1>
              <p className='subtitle is-3'>
                &amp; I&apos;m a Software Developer / Web Developer
              </p>
              <div className='buttons is-flex is-align-items-center'>
                <a
                  className='button'
                  href='https://github.com/alejmilian '
                  target='_blank'
                  rel='noreferrer'>
                  <span className='icon'>
                    <i className='fa-brands fa-github fa-1x'></i>
                  </span>
                  <span>GitHub</span>
                </a>
                <a
                  className='button'
                  href='https://www.linkedin.com/in/alejandro-mili%C3%A1n-mor%C3%B3n-baa084216/'
                  target='_blank'
                  rel='noreferrer'>
                  <span className='icon is-large'>
                    <i className='fa-brands fa-linkedin-in fa-1x'></i>
                  </span>
                  <span>Linkedin</span>
                </a>
                <a
                  href='https://drive.google.com/uc?export=download&id=1ND237EvFi7D73eplhNzXUk1wO2AF8P10'
                  className='button is-dark'>
                  Get Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
