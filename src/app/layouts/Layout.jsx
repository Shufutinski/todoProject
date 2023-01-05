import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = () => {
  const brand = 'ToDo';

  return (
    <>
      <Navbar brand={brand} />
      



      <Footer />
    </>
  )
}

export default Layout;