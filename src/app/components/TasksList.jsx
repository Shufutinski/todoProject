import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Task from './Task';



const TasksList = () => {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => {
  //     const payload = response.data;
  //     setTodos(...todos, payload);
  //   })
  // }, [])

  // if (!todos.length) {
  //   return null;
  // }

  // const todoList =  todos.reverse().map(todo => <Task key={todo.id} {...todo} /> )

  return (
    <>
      {todos}
    </>
  )
}

export default TasksList;