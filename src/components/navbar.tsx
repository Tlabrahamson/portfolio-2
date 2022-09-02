import React from 'react'

interface NavbarProps {
  // Navbar Props Here
}

export default function navbar<NavbarProps>() {

  const toggleContactModal = () => {
    let modal = document.querySelector('.contact-modal');
    modal?.classList.toggle('active');
  }

  return (
    <header>
      <h1>LOGO</h1>
      {/* <ul className='nav-list'>
        <li className='nav-link'><a href="/">About</a></li>
        <li className='nav-link'><a href="/">Projects</a></li>
      </ul> */}
      <button onClick={() => toggleContactModal()}>Contact</button>

      <div className='contact-modal'>
        <div className='contact-modal-content'>
          <h3>This is how you can contact me.</h3>
        </div>
      </div>
    </header>
  )
}
