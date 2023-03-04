import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

  const toggleContactModal = () => {
    let modal = document.querySelector('.contact-modal');
    let modalContent = document.querySelector('.contact-modal-content');
    let avatarContainer = document.querySelector('.hero-spline-container');
    modal?.classList.toggle('active');
    modalContent?.classList.toggle('active');
    avatarContainer?.classList.toggle('modal-active');
    document.body.classList.toggle('body-active');
  }

  window.onscroll = function() {addNavbarBackground()};
  
  const addNavbarBackground = () => {
    let navbar = document.getElementById('navbar')
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar!.classList.add('navbar-active');
    } else {
      navbar!.classList.remove('navbar-active');
    }
  }

  return (
    <header id="navbar">
      <h1 className='logo'>TA</h1>
      <button onClick={() => toggleContactModal()}>Contact</button>
      <div className='contact-modal'>
        <div className='contact-modal-content'>
          <p className='no-container-text'>If you'd like to chat, there are a few ways you can contact me:</p>
          <div className='contact-modal-icon-container'>
            <div className='contact-modal-icons'>
              <a href="https://www.linkedin.com/in/tim-abrahamson-b6a34a174/" target='_blank' rel='noreferrer' aria-label="Tim Abrahamson's LinkedIn" className='contact-modal-link'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/Tlabrahamson" target='_blank' rel='noreferrer' aria-label="Tim Abrahamson's GitHub" className='contact-modal-link'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="mailto:timabrahamson0@gmail.com" target='_blank' rel='noreferrer' aria-label="Tim Abrahamson's Email" className='contact-modal-link'>
                <FontAwesomeIcon icon={faSquareEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
