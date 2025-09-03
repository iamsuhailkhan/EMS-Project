import React from "react"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [task, setTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault() 

    setTask({taskTitle,taskDescription,taskDate,category,active:false,newtask:true,failed:false,completed:false})

    const data = userData.employees

    data.forEach(function(elem){
      if(asignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask+1
      }
    })
    setUserData(data)

   setTaskTitle('')
   setCategory('')
   setAsignTo('')
   setTaskDate('')
   setTaskDescription('')

  }
  return (
    <div className='p-5 mt-7 rounded bg-emerald-50'>
            <form className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                    <h3 className='text-sm mb-0.5'>Task Title</h3>
                    <input 
                     value={taskTitle}
                     onChange={(e)=>{
                       setTaskTitle(e.target.value)
                     }}
                     className=' text-sm py-1 px-2 w-4/5 rounded border-2' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                    <h3 className='text-sm mb-0.5'>Date</h3>
                    <input
                    value={taskDate}
                     onChange={(e)=>{
                       setTaskDate(e.target.value)
                     }} 
                    className='text-sm py-1 px-2 w-4/5 border-2' type="date" />
                    </div>
                    <div>
                    <h3 className='text-sm mb-0.5'>Asign to</h3>
                    <input 
                    value={asignTo}
                     onChange={(e)=>{
                       setAsignTo(e.target.value)
                     }}
                    className=' text-sm py-1 px-2 w-4/5 border-2' type="text" placeholder='Employee name' />
                   </div>
                   <div>
                    <h3 className='text-sm mb-0.5'>Category</h3>
                    <input 
                    value={category}
                     onChange={(e)=>{
                       setCategory(e.target.value)
                     }}
                    className=' text-sm py-1 px-2 w-4/5 border-2' type="text" placeholder='design , dev , etc' />
                   </div>
                </div>
                
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm  mb-0.5'>Description</h3>
                    <textarea 
                     value={taskDescription}
                     onChange={(e)=>{
                       setTaskDescription(e.target.value)
                     }} 
                    className=' w-full h-44 text-sm py-2 px-4 border-2 rounded ' name='' id='' cols="30" rows="10"></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
    </div>
  )
}

export default CreateTask