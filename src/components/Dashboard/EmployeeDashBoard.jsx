import React from 'react'
import Header from '../other/Header'
import TaskListNo from '../Other/TaskListNo'
import TaskList from '../TaskList/TaskList'

const EmployeeDashBoard = (props) => {
  return (
    
    <div className='p-10 h-screen'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNo data={props.data}/>
            <TaskList data={props.data}/>
    </div>


  )
}

export default EmployeeDashBoard