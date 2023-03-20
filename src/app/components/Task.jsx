import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const Task = (props) => {
  const [isDone, setIsDone] = useState(false);

  const {id, textarea} = props;

  const handleClick = () => {
    setIsDone(!isDone);
  }

  return (
    <>
      <div className={isDone ? "card mt-4 mb-4 text-decoration-line-through text-muted" : "card mt-4 mb-4"}>
        <div className="card-header">
          <h4>Task number - {id}</h4>
        </div>
        <div className="card-body">
          <h5 className="card-text">{textarea}</h5>
        </div>
        <div className="text-end m-1">
          <a onClick={handleClick} className={isDone ? 'btn btn-success m-1' : 'btn btn-danger m-1'} >{isDone ? 'You solved it' : 'Task in progress'}</a>
          <a className='btn btn-dark'><FaRegTrashAlt /></a>
        </div>
      </div>
    </>
  )
}

export default Task;