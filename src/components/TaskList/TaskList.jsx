import React from 'react'
import AccetTask from './AccetTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import  FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='overflow-x-auto  flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10'>
       {data.tasks.map((elem, idx)=>{
        if(elem.active){
          return <AccetTask key={idx} data={elem}/>
        }
        if(elem.NewTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.Completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }
       })}
    </div>
   
  )
}

export default TaskList