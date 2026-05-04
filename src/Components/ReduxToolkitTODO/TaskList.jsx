import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem';

const TaskList = () => {

    const {items, filters} = useSelector(state => state.task);
    console.log('items', items);
    const filteredList = filters === 'completed' ? items.filter(t => t.completed) : items;


  return (
    <ul>
      {
        filteredList.map((task) => {
           return <TaskItem key={task.id} task={task}/>
        })
      }
    </ul>
  )
}

export default TaskList;
