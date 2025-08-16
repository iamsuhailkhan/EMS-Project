import React, {useState} from 'react'

const Header = (props) => {

  const [username, setuserName] = useState('')

  // if(!data){
  //   setuserName('Admin')
  // }else {
  //   setuserName(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    
  }


  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl text-black font-medium'>Hello,<br/> <span className='text-3xl text-black font-semibold'>username👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white rounded-sm px-5 py-2'>Log Out</button>
    </div>
   
  )
}

export default Header