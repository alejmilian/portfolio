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
            <form id="contact-form">
              <div className="field">
                <label className="label">Name</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    name="name"
                    required="required"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    name="subject"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="email"
                    placeholder="hello@email.com"
                    name="email"
                    required="required"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                    name="message"
                    required="required"
                  ></textarea>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <input className="button" type="submit" value="Send" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
