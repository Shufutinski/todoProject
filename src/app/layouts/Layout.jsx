import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TasksList from '../components/TasksList';
import { Button } from 'react-bootstrap';
import ModalWindow from '../components/ModalWindow';


const brand = 'To Do App';

const Layout = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Navbar brand={brand} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Button variant='primary' className='mt-3' onClick={handleShow}>
              Add new task
            </Button>
            <TasksList />
            <ModalWindow show={show} callback={handleClose} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Layout;