import React from 'react';

const Footer = () => {
  return (
    <footer className='text-lg-start bg-dark fixed-bottom'>
        <div class="text-light p-2">
            &copy; {new Date().getFullYear()}
        </div>
    </footer>
  )
}

export default Footer;