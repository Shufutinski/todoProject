import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TasksList from '../components/TasksList';


const brand = 'ToDo';

const Layout = () => {
  return (
    <>
      <Navbar brand={brand} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TasksList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout;