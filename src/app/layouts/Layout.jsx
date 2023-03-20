import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TasksList from '../components/TasksList';
import { Button } from 'react-bootstrap';
import ModalWindow from '../components/ModalWindow';


const brand = 'To Do App';

const Layout = () => {
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);

  const newArr = []
  
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  const addTodo = (todo) => {
    const position = todos.length + 1
    todo.position = position
    todo.date = new Date().getTime()

    
    setTodos([...todos, todo])
  }

  return (
    <>
      <Navbar brand={brand} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Button variant='primary' className='mt-3' onClick={handleShow}>
              Add new task
            </Button>
            <TasksList todos={todos}/>
            <ModalWindow show={show} callback={handleClose} addTodo={addTodo}/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Layout;