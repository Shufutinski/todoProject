import React from 'react';

const Menu = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid justify-content-center">
            <a className="navbar-brand mb-1 h1">{props.brand}</a>
        </div>
    </nav>
  )
}

export default Menu;