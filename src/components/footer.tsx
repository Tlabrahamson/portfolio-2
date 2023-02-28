import React from 'react'

export default function Footer() {

    const year = new Date().getFullYear();

  return (
    <footer>
        <p className='no-container-text'>
            &copy; {year} Tim Abrahamson
        </p>
    </footer>
  )
}
