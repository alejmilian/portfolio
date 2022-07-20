import PropTypes from 'prop-types'

function Project ({ name, image, description, codeurl, previewurl }) {
  return (
    <div className='column is-one-third'>
      <div className='card'>
        <div className='card-header'>
          <h4 className='card-header-title title is-4'>{name}</h4>
        </div>
        <div className='card-image'>
          <figure className='image is-128X128'>
            <img src={image} alt='cute' />
          </figure>
        </div>
        <div className='card-content'>
          <div className='content'>
            <p className='is-size-4-desktop is-size-6-tablet is-size-0-mobile'>
              {description}
            </p>
          </div>
        </div>
        <footer className='card-footer'>
          <a href={codeurl} className='card-footer-item'>
            <span className='icon'>
              <i className='fa-brands fa-github-square' aria-hidden='true'></i>
            </span>
            <span className='icon-text'>Code</span>
          </a>
          <a href={previewurl} className='card-footer-item'>
            Preview
          </a>
        </footer>
      </div>
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  codeurl: PropTypes.string,
  previewurl: PropTypes.string
}

export default Project
