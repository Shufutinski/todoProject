import React, { useState } from 'react';

const Task = (props) => {
  const [isDone, setIsDone] = useState(false)

  const {id, title} = props;

  const handleClick = () => {
    setIsDone(!isDone);
  }

  return (
    <>
      <div className={isDone ? "card m-4 text-decoration-line-through text-muted" : "card m-4"}>
        <h4 className="card-header">Task number - {id}</h4>
        <div className="card-body">
          <p className="card-text">{title}</p>
          <a onClick={handleClick} className={isDone ? 'btn btn-success' : 'btn btn-danger'} >{isDone ? 'You solved it' : 'Task in progress'}</a>
        </div>
      </div>
    </>
  )
}

export default Task;