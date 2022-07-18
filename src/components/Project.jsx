import cute from '../images/cute.jpg'

function Project () {
  return (
    <div className='column is-one-third'>
      <div className='card'>
        <div className='card-header'>
          <h4 className='card-header-title title is-4'>Card header</h4>
        </div>
        <div className='card-image'>
          <figure className='image is-128X128'>
            <img src={cute} alt='cute' />
          </figure>
        </div>
        <div className='card-content'>
          <div className='content'>
            <p className='is-size-4-desktop is-size-6-tablet is-size-0-mobile'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, eius eos qui nemo in maxime quos temporibus dolores
              autem molestias.
            </p>
          </div>
        </div>
        <footer className='card-footer'>
          <a href='#' className='card-footer-item'>
            <span className='icon'>
              <i className='fa-brands fa-github-square' aria-hidden='true'></i>
            </span>
            <span className='icon-text'>Code</span>
          </a>
          <a href='#' className='card-footer-item'>
            Preview
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Project
