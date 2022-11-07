import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

interface NavbarProps {
  // Navbar Props Here
} 

export default function Navbar<NavbarProps>() {

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
      {/* <ul className='nav-list'>
        <li className='nav-link'><a href="/">About</a></li>
        <li className='nav-link'><a href="/">Projects</a></li>
      </ul> */}
      <button onClick={() => toggleContactModal()}>Contact</button>

      <div className='contact-modal'>
        <div className='contact-modal-content'>
          <h3>If you'd like to chat, there are a couple ways you can contact me:</h3>
          <div className='contact-modal-icon-container'>
            <div className='contact-modal-icons'>
              <a href="https://www.linkedin.com/in/tim-abrahamson-b6a34a174/" target='_blank' className='contact-modal-link'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/Tlabrahamson" target='_blank' className='contact-modal-link'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="mailto:timabrahamson0@gmail.com" target='_blank' className='contact-modal-link'>
                <FontAwesomeIcon icon={faSquareEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
