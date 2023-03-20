import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Task from './Task';



const TasksList = (props) => {

  return (
    <>
      {props.todos.slice(0).reverse().map(todo => <Task key={todo.date} id={todo.position} {...todo}/>)}
    </>
  )
}

export default TasksList;