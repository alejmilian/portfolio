function MyFooter () {
  return (
    <footer className='footer'>
      <section>
        <div className='container'>
          <div className='content has-text-centered'>
            <p>
              <small>
                &copy;
                {new Date().getFullYear()}
                Alejandro Mili&aacute;n. All rights reserved.
              </small>
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default MyFooter
