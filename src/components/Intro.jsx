import PropTypes from 'prop-types'

import subtleprism from '../img/subtle-prism.svg'

const introBackgroundStyle = {
  backgroundImage: 'url(' + subtleprism + ')',
  backgroundPosition: 'center'
}

function Intro ({ name, links }) {
  return (
    <section id='intro' style={introBackgroundStyle} className='is-family-sans-serif hero is-link is-medium'>
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
                  href={links.github}
                  target='_blank'
                  rel='noreferrer'>
                  <span className='icon'>
                    <i className='fa-brands fa-github fa-1x' />
                  </span>
                  <span>GitHub</span>
                </a>
                <a
                  className='button'
                  href={links.linkedin}
                  target='_blank'
                  rel='noreferrer'>
                  <span className='icon is-large'>
                    <i className='fa-brands fa-linkedin-in fa-1x' />
                  </span>
                  <span>Linkedin</span>
                </a>
                <a
                  className='button is-dark'
                  href={links.resume}
                  target='_blank'
                  rel='noreferrer'>
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

Intro.propTypes = {
  name: PropTypes.string,
  links: PropTypes.object
}

export default Intro
