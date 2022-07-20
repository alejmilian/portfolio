import React from 'react'
import PropTypes from 'prop-types'

class CustomNavbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isToggle: true, isActive: '', srOnly: 'sr-only' }
  }

  handleClick = (e) => {
    if (this.state.isToggle) {
      this.setState({ isToggle: false, isActive: 'is-active', srOnly: '' })
    } else {
      this.setState({ isToggle: true, isActive: '', srOnly: 'sr-only' })
    }
  }

  render () {
    return (
      <nav className='navbar is-fixed-top is-size-5-desktop'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='index.html' target='_blank'>
            <i className='fa-solid' aria-hidden='true'>
              Alejandro
            </i>
          </a>
          <a
            role='button'
            className={'navbar-burger ' + this.state.isActive}
            aria-label='menu'
            aria-expanded='false'
            onClick={this.handleClick}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div id='navbarMenu' className={'navbar-menu ' + this.state.isActive}>
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
              href={this.props.contact.linkedin}
              target='_blank'
              rel='noreferrer'>
              <span className='icon'>
                <i className='fa-brands fa-linkedin' aria-hidden='true'></i>
              </span>
              <span className={this.state.srOnly}>Linkedin</span>
            </a>
            <a
              className='navbar-item'
              href={this.props.contact.github}
              target='_blank'
              rel='noreferrer'>
              <span className='icon'>
                <i className='fa-brands fa-github-square' aria-hidden='true'></i>
              </span>
              <span className={this.state.srOnly}>Github</span>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

CustomNavbar.propTypes = {
  contact: PropTypes.object,
  linkedin: PropTypes.string,
  github: PropTypes.string
}

export default CustomNavbar
