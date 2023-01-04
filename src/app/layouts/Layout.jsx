import React from 'react';

const Layout = () => {
  const brand = 'ToDo';

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand mb-1 h1">{brand}</a>
        </div>
      </nav>
    </>
  )
}

export default Layout;