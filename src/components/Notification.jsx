import PropTypes from 'prop-types'

const pined = {
  position: 'fixed',
  bottom: '0.5rem',
  right: '0.5rem',
  zIndex: '100'
}

function Notification ({ message, type, handelClose }) {
  let notification
  if (type === 'success') {
    notification = (
      <div className="notification is-success" style={pined}>
        <button className="delete" onClick={handelClose} /> {message}
      </div>
    )
  } else if (type === 'fail') {
    notification = (
      <div className="notification is-warning" style={pined}>
        <button className="delete" onClick={handelClose} /> {message}
      </div>
    )
  } else if (type === 'error') {
    notification = (
      <div className="notification is-danger" style={pined}>
        <button className="delete" onClick={handelClose} /> {message}
      </div>
    )
  }
  return notification
}

Notification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  handelClose: PropTypes.func
}

export default Notification
