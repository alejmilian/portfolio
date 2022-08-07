import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import Notification from './Notification'

const SERVICE_ID = 'service_ft0wjph'
const TEMPLATE_ID = 'template_1oetjab'
const PUBLIC_KEY = '035XWfZqBzOLcI61O'

function ContactForm () {
  const form = useRef()
  const [sended, setSended] = useState(false)
  const [type, setMessageTyype] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail (e) {
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text)
        if (result.text === 'OK') {
          setMessageTyype('success')
          setMessage('Your message was sended successfully.')
          setSended(true)
        } else {
          setMessageTyype('fail')
          setMessage('There was a promblem. Try again later.')
          setSended(true)
        }
      }, (error) => {
        console.log(error.text)
        setMessageTyype('error')
        setMessage('(505) There was a promblem. Try again later.')
        setSended(true)
      })
  }

  function handleClear () {
    for (let i = 0; i < 4; i++) form.current[i].value = ''
  }

  return (
    <div>
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
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
                <i className="fas fa-user"/>
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
                required="required"
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
                <i className="fas fa-envelope"/>
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
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div id='sendButton' className="control">
              <input className="button is-dark" type="submit" value="Send" />
            </div>
            <div id='cancelButton' className="control">
              <input className="button is-link is-light" onClick={handleClear} type="button" value="Cancel"/>
            </div>
          </div>
        </form>
        {sended && (
          <Notification
            type={type}
            message={message}
            handelClose={() => setSended(false)}/>)
        }
    </div>
  )
}

export default ContactForm
