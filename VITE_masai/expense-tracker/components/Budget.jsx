import React from 'react'

const Budget = () => {
  return (
   <div className='shadow-md p-4'>
    <div className='flex w-full'>
        <input className='w-3/4 border-2 border-gray-900 rounded-md' type='number'/>
       <button className='w-1/4 py-1.5  bg-blue-500 rounded-md ml-2'>Set Budget</button>
    </div>
   </div>
  )
}

export default Budget