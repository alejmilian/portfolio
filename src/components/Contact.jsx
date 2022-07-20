import ContactForm from './ContactForm'

function Contact () {
  return (
      <section id="contact" className="section is-medium">
      <div className="container">
        <div className="columns is-vcentered is-centered is-4">
          <div className="column is-half">
            <div className="container">
              <div className="content is-large">
                <h2 className="title is-2">Contact me</h2>
                <p className="">
                  I&apos;m always open to adding new skills to my repertoire and
                  getting involved with new projects that can help me learn or
                  apply all that I have learned throughout my career.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-half box">
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
